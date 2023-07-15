"use strict";

const getChannelURL = require("ember-source-channel-url");
const { embroiderSafe, embroiderOptimized } = require("@embroider/test-setup");

module.exports = function () {
  return Promise.all([
    getChannelURL("release"),
    getChannelURL("beta"),
    getChannelURL("canary"),
  ]).then((urls) => {
    const releaseUrl = urls[0];
    const betaUrl = urls[1];
    const canaryUrl = urls[2];
    return {
      usePnpm: true,
      scenarios: [
        {
          name: "ember-lts-3.28",
          npm: {
            devDependencies: {
              "ember-cli": "~3.28.0",
              "ember-data": "~3.28.0",
              "ember-source": "~3.28.0",
              "ember-qunit": "~6.0.0",
              "@ember/test-helpers": "~2.7.0",
            },
          },
        },
        {
          name: "ember-4.0",
          npm: {
            devDependencies: {
              "ember-cli": "~4.0.0",
              "ember-data": "~4.0.0",
              "ember-source": "~4.0.0",
            },
          },
        },
        {
          name: "ember-lts-4.4",
          npm: {
            devDependencies: {
              "ember-cli": "~4.4.0",
              "ember-data": "~4.4.0",
              "ember-source": "~4.4.0",
            },
          },
        },
        {
          name: "ember-lts-4.8",
          npm: {
            devDependencies: {
              "ember-cli": "~4.8.0",
              "ember-data": "~4.8.2",
              "ember-source": "~4.8.0",
            },
          },
        },
        {
          name: "ember-lts-4.12",
          npm: {
            devDependencies: {
              "ember-cli": "~4.12.0",
              "ember-source": "~4.12.0",
              "ember-data": "~4.12.1",
            },
          },
        },
        {
          name: "embroider-lts-4.12",
          env: {
            ESA_TEST_EMBROIDER: true,
          },
          npm: {
            devDependencies: {
              "ember-cli": "~4.12.0",
              "ember-source": "~4.12.0",
              "ember-data": "~4.12.1",
              torii: null,
            },
          },
        },
        {
          name: "embroider-ember-5",
          env: {
            ESA_TEST_EMBROIDER: true,
          },
          npm: {
            devDependencies: {
              "ember-cli": "~5.0.0",
              "ember-data": "~5.0.0",
              "ember-source": "~5.0.0",
              torii: null,
            },
          },
        },
        {
          name: "embroider-default",
          env: {
            ESA_TEST_EMBROIDER: true,
          },
          npm: {
            devDependencies: {
              torii: null,
            },
          },
        },
        {
          name: "ember-release",
          npm: {
            devDependencies: {
              "ember-cli": "latest",
              "ember-data": "latest",
              "ember-source": releaseUrl,
              torii: null,
            },
          },
        },
        {
          name: "ember-beta",
          npm: {
            devDependencies: {
              "ember-cli": "beta",
              "ember-data": "beta",
              "ember-source": betaUrl,
              torii: null,
            },
          },
        },
        {
          name: "ember-canary",
          npm: {
            devDependencies: {
              "ember-cli": "beta",
              "ember-data": "canary",
              "ember-source": canaryUrl,
              torii: null,
            },
          },
        },
        {
          name: "ember-default",
          npm: {
            devDependencies: {
              torii: null,
            },
          },
        },
        embroiderSafe({
          npm: {
            devDependencies: {
              torii: null,
              "@embroider/core": "~3.0.0",
              "@embroider/compat": "~3.0.0",
              "@embroider/webpack": "~3.0.0",
            },
          },
        }),
        embroiderOptimized({
          npm: {
            devDependencies: {
              torii: null,
              "@embroider/core": "~3.0.0",
              "@embroider/compat": "~3.0.0",
              "@embroider/webpack": "~3.0.0",
            },
          },
        }),
      ],
    };
  });
};
