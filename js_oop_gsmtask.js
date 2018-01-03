var gsmOne = {
    model: 'Siemens',
    hasSimCard: false,
    simMobileNumber: '',
    outgoingCallDuration: 0,
    lastIncomingCall: '',
    lastOutgoingCall: '',

    insertSimCard: function (insertNumber) {
        if (typeof insertNumber == 'string' &&
            insertNumber.startsWith('08') &&
            insertNumber.length == 10) {
            this.hasSimCard = true;
            this.simMobileNumber = insertNumber;
            console.log('This is my number: ' + insertNumber);
            console.log('Do i have simCard: ' + this.hasSimCard);
        } else {
            console.log('Something went wrong with insertSimCard method');
        }
    },

    removeSimCard: function () {
        this.hasSimCard = false;
        this.simMobileNumber = '';
    },

    isValidCall: function (receiver, duration) {
        return ((receiver) && (this.simMobileNumber !== receiver.simMobileNumber) &&
            (this.hasSimCard) &&
            (receiver.hasSimCard) &&
            (duration > 0) &&
            (!isNaN(duration) && (this !== receiver) && (duration < 60)))
    },

    call: function (receiver, duration) {
        if (this.isValidCall(receiver, duration)) {
            var newCall = {
                caller: this,
                receiver: receiver,
                duration: duration,
                price: 10,
            }
            this.outgoingCallDuration += duration;
            this.lastOutgoingCall = newCall;
            receiver.lastIncomingCall = newCall;

            console.log(receiver.simMobileNumber + ' and ' + this.simMobileNumber + ' had a conversation long: ' + duration + ' minutes');
        } else {
            console.log('Something isn\'t okay');
        }

    },

    getPriceForAMinute: function () {
        return this.outgoingCallDuration * this.lastOutgoingCall.price;
    },

    printOutgoing: function () {
        if (this.lastOutgoingCall !== null) {
            console.log('I called to: ' + this.lastOutgoingCall.receiver.model);
            console.log(' duration was: ' + this.lastOutgoingCall.duration+' minutes');
        } else {
            console.log('please, call comeone')
        }
    },
    printIncoming: function () {
        if (this.lastIncomingCall !== null) {
            console.log('I called to: ' + this.lastIncomingCall.caller.model);
            console.log(' duration was: ' + this.lastIncomingCall.duration+' minutes');
        } else {
            console.log('someone needs to call you')
        }
    },
}

// second GSM:

var gsmTwo = {
    model: 'Motorola',
    hasSimCard: false,
    simMobileNumber: '',
    outgoingCallDuration: 0,
    lastIncomingCall: null,
    lastOutgoingCall: null,

    insertSimCard: function (insertNumber) {
        if (typeof insertNumber == 'string' &&
            insertNumber.startsWith('08') &&
            insertNumber.length == 10) {
            this.hasSimCard = true;
            this.simMobileNumber = insertNumber;
            console.log('This is my number: ' + insertNumber);
            console.log('Do i have simCard: ' + this.hasSimCard);
        } else {
            console.log('Something went wrong with insertSimCard method');
        }
    },

    removeSimCard: function () {
        this.hasSimCard = false;
        this.simMobileNumber = '';
    },

    isValidCall: function (receiver, duration) {
        return ((receiver) && (this.simMobileNumber !== receiver.simMobileNumber) &&
            (this.hasSimCard) &&
            (receiver.hasSimCard) &&
            (duration > 0) &&
            (!isNaN(duration) && (this !== receiver) && (duration < 60)))
    },

    call: function (receiver, duration) {
        if (this.isValidCall(receiver, duration)) {
            var newCall = {
                caller: this,
                receiver: receiver,
                duration: duration,
                price: 10,
            }
            this.outgoingCallDuration += duration;
            this.lastOutgoingCall = newCall;
            receiver.lastIncomingCall = newCall;

            console.log(receiver.simMobileNumber + ' and ' + this.simMobileNumber + ' had a conversation long: ' + duration);
        } else {
            console.log('Something isn\'t okay');
        }

    },

    getPriceForAMinute: function () {
        return this.outgoingCallDuration * this.lastOutgoingCall.price;
    },

    printOutgoing: function () {
        if (this.lastOutgoingCall !== null) {
            console.log('I called to: ' + this.lastOutgoingCall.receiver.model);
            console.log(' duration was: ' + this.lastOutgoingCall.duration + ' minutes');
        }
    },
    printIncoming: function () {
        if (this.lastIncomingCall !== null) {
            console.log('I called to: ' + this.lastIncomingCall.caller.model);
            console.log(' duration was: ' + this.lastIncomingCall.duration + ' minutes');
        }
    },
}

gsmOne.insertSimCard('0899999999');
gsmTwo.insertSimCard('0888888888');
gsmOne.call(gsmTwo, 20);
console.log('this is the price for the call: ' + gsmOne.getPriceForAMinute() + '.00 BGN');
gsmTwo.printIncoming();
gsmOne.printOutgoing();