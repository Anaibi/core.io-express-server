/*jshint esversion:6, node:true*/
'use strict';

const extend = require('gextend');

let _data = {
    _i: 1,
    1: {
        id: 1,
        email: 'hello@goliatone.com'
    }
};

let Passport = {
    findOneById: function(id){
        return Promise.resolve(_data[id]);
    },
    findOne: function(...query){
        return Promise.resolve(_data[2]);
    },
    create: function(record){
        console.log('createPassport', JSON.stringify(record, null, 4));

        ++_data._i;
        let i = _data._i;
        record.id = i;
        _data[i] = record;

        record.toJSON = function(){
            let clone = extend({}, this);
            delete clone.password;
            return clone;
        };

        record.validatePassword = function(password){
            return Promise.resolve(password);
        };

        return Promise.resolve(record);
    },
    destroy: function(user){
        return Promise.resolve();
    },
    update: function(user){
        return Promise.resolve();
    }
};

module.exports = Passport;
