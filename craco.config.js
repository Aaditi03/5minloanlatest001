module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the existing source-map-loader rule
      const sourceMapRule = webpackConfig.module.rules.find(
        (rule) => rule.enforce === "pre" && rule.use?.loader?.includes("source-map-loader")
      );
      
      // Exclude react-datepicker from source-map-loader
      if (sourceMapRule) {
        sourceMapRule.exclude = [
          ...(sourceMapRule.exclude || []),
          /node_modules\/react-datepicker/,
        ];
      }
      return webpackConfig;
    },
  },
};