import { Mongo } from 'meteor/mongo';

export const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
  Meteor.publish('items', function itemsPublication() {
    return Items.find();
  });
}
