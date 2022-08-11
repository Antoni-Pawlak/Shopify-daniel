const Banner = ({ pageTitle }) => {
  return (
    <div className="banner_bg font_size_md">
      Select the Recommendations you want to use for the {pageTitle} page.
      <span className="theme_color"> Recommendo</span> will automatically
      determine the products to be shown using the selected options.
      <div className="text_center">
        Choose Below and{" "}
        <span className="theme_color">Click Save to Apply</span>
      </div>
    </div>
  );
};

export default Banner;
