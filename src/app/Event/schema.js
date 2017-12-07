import { BaseSchema } from '../schema';
import AdSchema from '../Ad/schema';

const EventSchema = `
    type Event {
        id: Int!
        title: String!
        description: String!
        open: Boolean
        ads: [Ad]
    }

    extend type Query {
        Events(open: Boolean): [Event]
        Event(id: Int!): Event
    }

    input EventInput {
        title: String!
        description: String!
        open: Boolean!
    }

    extend type Mutation {
        createEvent(input: EventInput!): Event
        updateEvent(id: Int!, input: EventInput!): Event
        deleteEvent(id: Int!): Boolean
    }
`;

export default () => [EventSchema, AdSchema, BaseSchema];