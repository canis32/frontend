// Типы для коллекций
export interface CollectionImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    large: ImageFormat
    small: ImageFormat
    medium: ImageFormat
    thumbnail: ImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Collection {
  id: number
  documentId: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  img: CollectionImage
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Meta {
  pagination: Pagination
}

export interface CollectionsResponse<T> {
	data: T;
	meta: Meta
	};
