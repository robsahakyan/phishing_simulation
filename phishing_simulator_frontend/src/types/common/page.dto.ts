export type PageDto = {
  page: number
  take: number
  itemCount: number
  pageCount: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export interface PageRequestDto {
  page?: number
  take?: number
  takeAll?: boolean;
}
