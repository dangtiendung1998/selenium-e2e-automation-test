"use strict";
const {browser} = require("protractor");
const {$$} = require("protractor");
const {$} = require("protractor");

module.exports = {
    locator : {
        buttonReply: $$('main[class^="chatContent"] ol[data-list-id="chat-messages"] li:last-of-type div[id^=message-accessories] div[class^=container]')
    },

    replyMessage: function() {
        return this.locator.buttonReply.isPresent().then((isPresent) => {
            console.log('file: discord-po.js ~ newMessage: ', isPresent)
            if(isPresent) {
                return this.locator.buttonReply.first().$$('button').count().then((count) => {
                    return this.locator.buttonReply.first().$$('button').first().click().then(() => {
                        console.log('done reply')
                        return browser.sleep(10000).then(() => {
                            return this.replyMessage();
                        })
                    })
                })
            }
            return this.replyMessage();
        })
    }
}