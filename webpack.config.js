import webpack from 'webpack'
import dontenv from 'dotenv';

const { parsed: localEnv } = dontenv.config();
module.exports = ({
  webpack(env) {
    const envKeys = Object.keys(localEnv).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(localEnv[next]);
      return prev;
    }, {});

    env.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    env.plugins.push(new webpack.DefinePlugin(envKeys));

    return env;
  }
});