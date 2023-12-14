module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  // Resolve relative reference ../Utilities/Platform as react-native-web
  return config;
};