/**
 * Generated by orval v6.19.0 🍺
 * Do not edit manually.
 * Giphy API
 * Giphy API
 * OpenAPI spec version: 1.0
 */
export type TrendingStickersParams = {
  /**
   * The maximum number of records to return.
   */
  limit?: LimitParameter
  /**
   * An optional results offset.
   */
  offset?: OffsetParameter
  /**
   * Filters results by specified rating.
   */
  rating?: RatingParameter
}

export type TranslateStickerParams = {
  /**
   * Search term.
   */
  s: TermParameter
}

export type RandomStickerParams = {
  /**
   * Filters results by specified tag.
   */
  tag?: TagParameter
  /**
   * Filters results by specified rating.
   */
  rating?: RatingParameter
}

export type TrendingGifsParams = {
  /**
   * The maximum number of records to return.
   */
  limit?: LimitParameter
  /**
   * An optional results offset.
   */
  offset?: OffsetParameter
  /**
   * Filters results by specified rating.
   */
  rating?: RatingParameter
}

export type TranslateGifParams = {
  /**
   * Search term.
   */
  s: TermParameter
}

export type RandomGif200 = {
  data?: Gif
  meta?: Meta
}

export type RandomGifParams = {
  /**
   * Filters results by specified tag.
   */
  tag?: TagParameter
  /**
   * Filters results by specified rating.
   */
  rating?: RatingParameter
}

export type GetGifsById200 = {
  data?: Gif[]
  meta?: Meta
  pagination?: Pagination
}

export type GetGifsByIdParams = {
  /**
   * Filters results by specified GIF IDs, separated by commas.
   */
  ids?: GifIdsParameter
}

/**
 * Search term.
 */
export type TermParameter = string

/**
 * Filters results by specified tag.
 */
export type TagParameter = string

/**
 * Filters results by specified rating.
 */
export type RatingParameter = string

/**
 * Search query term or prhase.
 */
export type QueryParameter = string

/**
 * An optional results offset.
 */
export type OffsetParameter = number

/**
 * The maximum number of records to return.
 */
export type LimitParameter = number

/**
 * Specify default language for regional content; use a 2-letter ISO 639-1 language code.
 */
export type LangParameter = string

export type SearchStickersParams = {
  /**
   * Search query term or prhase.
   */
  q: QueryParameter
  /**
   * The maximum number of records to return.
   */
  limit?: LimitParameter
  /**
   * An optional results offset.
   */
  offset?: OffsetParameter
  /**
   * Filters results by specified rating.
   */
  rating?: RatingParameter
  /**
   * Specify default language for regional content; use a 2-letter ISO 639-1 language code.
   */
  lang?: LangParameter
}

export type SearchGifsParams = {
  /**
   * Search query term or prhase.
   */
  q: QueryParameter
  /**
   * The maximum number of records to return.
   */
  limit?: LimitParameter
  /**
   * An optional results offset.
   */
  offset?: OffsetParameter
  /**
   * Filters results by specified rating.
   */
  rating?: RatingParameter
  /**
   * Specify default language for regional content; use a 2-letter ISO 639-1 language code.
   */
  lang?: LangParameter
}

/**
 * Filters results by specified GIF IDs, separated by commas.
 */
export type GifIdsParameter = string

/**
 * Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.

 */
export type TooManyRequestsResponse = void

/**
 * The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.
 */
export type NotFoundResponse = void

/**
 * You weren't authorized to make your request; most likely this indicates an issue with your API Key.
 */
export type ForbiddenResponse = void

/**
 * Your request was formatted incorrectly or missing required parameters.
 */
export type BadRequestResponse = void

/**
 * The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
 */
export type User = {
  /** The URL for this user's avatar image. */
  avatar_url?: string
  /** The URL for the banner image that appears atop this user's profile page. */
  banner_url?: string
  /** The display name associated with this user (contains formatting the base username might not). */
  display_name?: string
  /** The URL for this user's profile. */
  profile_url?: string
  /** The Twitter username associated with this user, if applicable. */
  twitter?: string
  /** The username associated with this user. */
  username?: string
}

/**
 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.

 */
export type Pagination = {
  /** Total number of items returned. */
  count?: number
  /** Position in pagination. */
  offset?: number
  /** Total number of items available. */
  total_count?: number
}

/**
 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.

 */
export type Meta = {
  /** HTTP Response Message */
  msg?: string
  /** A unique ID paired with this response from the API. */
  response_id?: string
  /** HTTP Response Code */
  status?: number
}

export type Image = {
  /** The number of frames in this GIF. */
  frames?: string
  /** The height of this GIF in pixels. */
  height?: string
  /** The URL for this GIF in .MP4 format. */
  mp4?: string
  /** The size in bytes of the .MP4 file corresponding to this GIF. */
  mp4_size?: string
  /** The size of this GIF in bytes. */
  size?: string
  /** The publicly-accessible direct URL for this GIF. */
  url?: string
  /** The URL for this GIF in .webp format. */
  webp?: string
  /** The size in bytes of the .webp file corresponding to this GIF. */
  webp_size?: string
  /** The width of this GIF in pixels. */
  width?: string
}

/**
 * Type of the gif. By default, this is almost always gif
 */
export type GifType = (typeof GifType)[keyof typeof GifType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GifType = {
  gif: 'gif'
} as const

export type Gif = {
  /** The unique bit.ly URL for this GIF */
  bitly_url?: string
  /** Currently unused */
  content_url?: string
  /** The date this GIF was added to the GIPHY database. */
  create_datetime?: string
  /** A URL used for embedding this GIF */
  embded_url?: string
  /** An array of featured tags for this GIF (Note: Not available when using the Public Beta Key)
   */
  featured_tags?: string[]
  /** This GIF's unique ID */
  id?: string
  /** An object containing data for various available formats and sizes of this GIF. */
  images?: GifImages
  /** The creation or upload date from this GIF's source. */
  import_datetime?: string
  /** The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R */
  rating?: string
  /** The unique slug used in this GIF's URL */
  slug?: string
  /** The page on which this GIF was found */
  source?: string
  /** The URL of the webpage on which this GIF was found. */
  source_post_url?: string
  /** The top level domain of the source URL. */
  source_tld?: string
  /** An array of tags for this GIF (Note: Not available when using the Public Beta Key)
   */
  tags?: string[]
  /** The date on which this gif was marked trending, if applicable. */
  trending_datetime?: string
  /** Type of the gif. By default, this is almost always gif */
  type?: GifType
  /** The date on which this GIF was last updated. */
  update_datetime?: string
  /** The unique URL for this GIF */
  url?: string
  user?: User
  /** The username this GIF is attached to, if applicable */
  username?: string
}

export type TrendingStickers200 = {
  data?: Gif[]
  meta?: Meta
  pagination?: Pagination
}

export type TranslateSticker200 = {
  data?: Gif
  meta?: Meta
}

export type SearchStickers200 = {
  data?: Gif[]
  meta?: Meta
  pagination?: Pagination
}

export type RandomSticker200 = {
  data?: Gif
  meta?: Meta
}

export type GetGifById200 = {
  data?: Gif
  meta?: Meta
}

export type TrendingGifs200 = {
  data?: Gif[]
  meta?: Meta
  pagination?: Pagination
}

export type TranslateGif200 = {
  data?: Gif
  meta?: Meta
}

export type SearchGifs200 = {
  data?: Gif[]
  meta?: Meta
  pagination?: Pagination
}

export type GifImagesPreviewGif = Image & unknown

export type GifImagesPreview = Image & unknown

export type GifImagesOriginalStill = Image & unknown

export type GifImagesOriginal = Image & unknown

export type GifImagesLooping = Image & unknown

export type GifImagesFixedWidthStill = Image & unknown

export type GifImagesFixedWidthSmallStill = Image & unknown

export type GifImagesFixedWidthSmall = Image & unknown

export type GifImagesFixedWidthDownsampled = Image & unknown

export type GifImagesFixedWidth = Image & unknown

export type GifImagesFixedHeightStill = Image & unknown

export type GifImagesFixedHeightSmallStill = Image & unknown

export type GifImagesFixedHeightSmall = Image & unknown

export type GifImagesFixedHeightDownsampled = Image & unknown

export type GifImagesFixedHeight = Image & unknown

export type GifImagesDownsizedStill = Image & unknown

export type GifImagesDownsizedSmall = Image & unknown

export type GifImagesDownsizedMedium = Image & unknown

export type GifImagesDownsizedLarge = Image & unknown

export type GifImagesDownsized = Image & unknown

/**
 * An object containing data for various available formats and sizes of this GIF.
 */
export type GifImages = {
  downsized?: GifImagesDownsized
  downsized_large?: GifImagesDownsizedLarge
  downsized_medium?: GifImagesDownsizedMedium
  downsized_small?: GifImagesDownsizedSmall
  downsized_still?: GifImagesDownsizedStill
  fixed_height?: GifImagesFixedHeight
  fixed_height_downsampled?: GifImagesFixedHeightDownsampled
  fixed_height_small?: GifImagesFixedHeightSmall
  fixed_height_small_still?: GifImagesFixedHeightSmallStill
  fixed_height_still?: GifImagesFixedHeightStill
  fixed_width?: GifImagesFixedWidth
  fixed_width_downsampled?: GifImagesFixedWidthDownsampled
  fixed_width_small?: GifImagesFixedWidthSmall
  fixed_width_small_still?: GifImagesFixedWidthSmallStill
  fixed_width_still?: GifImagesFixedWidthStill
  looping?: GifImagesLooping
  original?: GifImagesOriginal
  original_still?: GifImagesOriginalStill
  preview?: GifImagesPreview
  preview_gif?: GifImagesPreviewGif
}
