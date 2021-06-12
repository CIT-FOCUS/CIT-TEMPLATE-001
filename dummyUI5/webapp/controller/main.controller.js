sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageToast) {
		"use strict";

		return Controller.extend("dummyUI5.controller.main", {
			onInit: function () {

            },
            onListItemPress: function (oEvent) {
                MessageToast.show("Opening " + oEvent.getSource().getTitle());
                var link2app = oEvent.getSource().getTooltip();
                window.open(link2app,'_blank');
		    }
		});
	});
