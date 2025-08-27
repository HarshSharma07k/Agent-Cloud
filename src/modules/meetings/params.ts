import { parseAsString, parseAsInteger, createLoader, parseAsStringEnum } from "nuqs/server";
import { DEFAULT_PAGE } from "@/constants";
import { meetingStatus } from "@/db/schema";

export const filterSearchParams = {
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({ clearOnDefault: true }),
    status: parseAsStringEnum(Object.values(meetingStatus)),
    agentId: parseAsString.withDefault("").withOptions({ clearOnDefault: true })
};

export const loadSearchParams = createLoader(filterSearchParams);
