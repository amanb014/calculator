import { Schema } from "../../../database/schema";
import { createRealmContext } from "@realm/react";

export const RealmContext = createRealmContext({
  schema: Schema,
});

export const { useRealm, useObject, useQuery } = RealmContext;
