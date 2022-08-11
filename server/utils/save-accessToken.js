import { sendEmail } from "../lib/send_email";
import { ClientDBKeys } from "../../lib/constants";
import { currTS } from "../lib/date";
import { createShopifyRESTClient } from "../lib/shopify-client";
import { createItem, fetchItem, updateItem } from "./db";
import { ClientDataDBDetails } from "../lib/constants";

const _getShopMetaData = async (shop, accessToken) => {
  const client = createShopifyRESTClient(shop, accessToken);
  const shopMetaData = await client.get({ path: `shop` });
  return shopMetaData.body;
};

export const saveAccessToken = async (shop, accessToken) => {
  try {
    const merchantData = await fetchItem(
      ClientDataDBDetails.TableName,
      ClientDataDBDetails.PrimaryKey(shop)
    );

    console.log("existing merchant data", merchantData);

    if (merchantData === null) {
      console.log("New Installation");
      const shopMetaData = await _getShopMetaData(shop, accessToken);
      const email = shopMetaData?.shop?.email;

      const paramsToSave = {
        [ClientDBKeys.SHOP_URL]: shop,
        [ClientDBKeys.ADMIN_ACCESS_TOKEN]: accessToken,
        [ClientDBKeys.ACTIVE]: true,
        [ClientDBKeys.STORE_EMAIL]: email ?? "",
        [ClientDBKeys.TIMESTAMP]: currTS(),
      };

      const response = await createItem(
        ClientDataDBDetails.TableName,
        paramsToSave
      );
      console.log(
        `Successfully added new client [Shop = ${shop}; accessToken = ${accessToken}] `,
        response
      );

      // trigger email
      if (process.env.STAGING !== "TRUE") {
        const emailContent = `
      Website: ${shopMetaData?.shop?.myshopify_domain}
      Date installed: ${currTS()}
      Store Info:
        (store email) ${shopMetaData?.shop?.email}
        (customer email) ${shopMetaData?.shop?.customer_email}
        (phone) ${shopMetaData?.shop?.phone}
      `;
        const emailSubject = `[New Client] ${shopMetaData?.shop?.name}`;
        await sendEmail(emailSubject, emailContent);
      }
    } else {
      // re-installation
      if (merchantData[ClientDBKeys.ACTIVE] === false) {
        console.log("reinstallation");
        const dataToUpdate = {
          [ClientDBKeys.ADMIN_ACCESS_TOKEN]: accessToken,
          [ClientDBKeys.ACTIVE]: true,
          [ClientDBKeys.TIMESTAMP]: currTS(),
        };

        const response = await updateItem(
          ClientDataDBDetails.TableName,
          ClientDataDBDetails.PrimaryKey(shop),
          dataToUpdate
        );
        console.log(
          `Successfully reinstalled existing client [Shop = ${shop}; accessToken = ${accessToken}] `,
          response
        );
      }
    }

    return merchantData === null;
  } catch (error) {
    console.log(
      "Error occured while updating database during save access token (installation)",
      error
    );
  }
};
