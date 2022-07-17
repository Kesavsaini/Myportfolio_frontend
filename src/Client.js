import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url"
export const client= sanityClient({
  projectId: "s0pd7iha", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-08-31',
  useCdn: true,
  token:"skBFy20sWGDenJjdqFxSjrTVK3gKjhXWGzJRpsAtpvgTqH6eU2nPt77jg026nHN3U0BonPmYT20bf4cYDjH2D6GBy4mX1HmNzD7ger6sYqj8LMfpnFfgAs0mI7TSkWWXNGNV4Vd81BQuIbwBMgKen5lCI585U6axq8I5zA99Ow3MsA9yKo7l",
  ignoreBrowserTokenWarning: true
});
const builder=imageBuilder(client);
export const urlFor=(source)=>builder.image(source);