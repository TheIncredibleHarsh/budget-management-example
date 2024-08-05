const express = require('express');
const appSettingsController = require('../Controllers/appSettings.controller');

const appSettingsRouter = express.Router();

appSettingsRouter.get('/', appSettingsController.getAppSettings);
appSettingsRouter.put('/currency', appSettingsController.updateCurrency);
appSettingsRouter.post('/category', appSettingsController.createCategory);
appSettingsRouter.delete('/category/:id', appSettingsController.deleteCategory);
appSettingsRouter.post('/tag', appSettingsController.createTag);
appSettingsRouter.delete('/tag/:id', appSettingsController.deleteTag);

module.exports = appSettingsRouter;