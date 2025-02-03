import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface menu {
    additionalImages?: SanityImageSource[];
    _id: string;
    name: string;
    _type: "food";
    image?: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    price: number;
    description?: string;
    slug : {
    current: any;
    _type : "slug"
    }
    inventory : number;
}
