module.exports = {
  name: 'apps-ng-app-base',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/apps/ng-app-base',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
