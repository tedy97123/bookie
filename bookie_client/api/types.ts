export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetAccessResponse {
  id: string;
  _id: string;
  __v: number;
  country: string;
  viewability: string;
  webReaderLink: Number;
  embeddable: Boolean;
  publicDomain: Boolean;
  textToSpeechPermission: string;
  epub: Object;
  pdf: Object;
  accessViewStatus: String;
  searchDescription: Object;
  bookId: Array<String>;
  salesId: Array<String>;
}

export interface GetBookResponse {
  id: string;
  _id: string;
  __v: number;
  google_book: String;
  author_name: String;
  description: String;
  isbn: String;
  page_count: Number;
  category: String;
  maturity_rating: String;
  publish_year: String;
  image: Array<String>;
  previewLink: String;
  publisher: String;
  title: String;
  salesId: Array<String>;
  accessId: Array<String>;
}

export interface GetBookSalesResponse {
  id: string;
  _id: string;
  __v: number;
  retail_price: Number;
  list_price: Number;
  buy_link: String;
  bookId: Array<String>;
  accessId: Array<String>;
}

export interface GetUserResponse {
  id: string;
  _id: string;
  __v: number;
  // oauthId: number;
  // accessToken: number;
  // refreshToken: Array<string>;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  totalTimeWorked: number;
  descriptionIds: Array<string>;
  lineItemIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface currentUser {
  rootReducer: any;
  firstName: Array<string>;
  lastName: string;
  email: string;
  descriptionIds: Array<string>;
  lineItemIds: Array<string>;
  totalTimeWorked: number;
}

export interface response200 {
  message: string;
}
