'use strict';

var PredictAPI = require('./');
var testApiMethod = require('../_test');

describe('SuiteAPI Predict Endpoint', function() {

  describe('#listWidgets', function() {

    testApiMethod(PredictAPI, 'listWidgets').shouldGetResultFromEndpoint('/predict');

  });

  describe('#hideWidget', function() {

    testApiMethod(PredictAPI, 'hideWidget').withArgs({ widget_id: 'asd123' }).shouldPostToEndpoint('/predict/asd123/hide', {});

    testApiMethod(PredictAPI, 'hideWidget').withArgs({}).shouldThrowMissingParameterError('widget_id');

  });

  describe('#showWidget', function() {

    testApiMethod(PredictAPI, 'showWidget').withArgs({ widget_id: 'asd123' }).shouldPostToEndpoint('/predict/asd123/show', {});

    testApiMethod(PredictAPI, 'showWidget').withArgs({}).shouldThrowMissingParameterError('widget_id');

  });

});