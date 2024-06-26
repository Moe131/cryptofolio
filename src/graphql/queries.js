/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoin = /* GraphQL */ `
  query GetCoin($id: ID!) {
    getCoin(id: $id) {
      id
      watchlist
      user
      coinid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCoins = /* GraphQL */ `
  query ListCoins(
    $filter: ModelCoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        watchlist
        user
        coinid
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
