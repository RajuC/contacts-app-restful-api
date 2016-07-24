/**
 * Created by raju on 7/10/16.
 */
'use strict';

module.exports = function (app) {
    var controller =  require('../controllers/core.server.controller.js');
    app
        .route('/api/contact')
        .get(controller.getContacts)
        .post(controller.createContact);

    app
        .route('/api/contact/:id')
        .put(controller.updateContact)
        .get(controller.getContactById)
        .delete(controller.deleteContact);
    
    app.
        param('id',controller.validateContactId);
}

