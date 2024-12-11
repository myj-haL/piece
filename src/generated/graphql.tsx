import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BoardFiles = {
  __typename?: 'BoardFiles';
  board_id: Scalars['String'];
  cdn_file_name?: Maybe<Scalars['String']>;
  cdn_file_path?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Float']>;
  file_id: Scalars['String'];
  file_size?: Maybe<Scalars['String']>;
  is_delete?: Maybe<Scalars['String']>;
  origin_file_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type BoardInquiry = {
  __typename?: 'BoardInquiry';
  board?: Maybe<TBoard>;
  board_id: Scalars['String'];
  inquiry_at: Scalars['DateTime'];
  inquiry_ip: Scalars['String'];
};

export type BoardRelation = {
  __typename?: 'BoardRelation';
  board?: Maybe<TBoard>;
  board_id: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  relation_board_id: Scalars['String'];
};

export type BoardResponse = {
  __typename?: 'BoardResponse';
  board: TBoard;
  nextBoard?: Maybe<TBoard>;
  preBoard?: Maybe<TBoard>;
};

export type BoardsResponse = {
  __typename?: 'BoardsResponse';
  boards: Array<TBoard>;
  pageInfo: PageInfoType;
  searchYearList: Array<YearInfo>;
};

export type CodeResponse = {
  __typename?: 'CodeResponse';
  commCodes: Array<TCommCode>;
};

export type CompanyHistory = {
  __typename?: 'CompanyHistory';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  day?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  history_id: Scalars['String'];
  month?: Maybe<Scalars['Float']>;
  updated_at: Scalars['DateTime'];
  updated_by: Scalars['String'];
  year?: Maybe<Scalars['Float']>;
};

export type CompanyHistorysResponse = {
  __typename?: 'CompanyHistorysResponse';
  companyHistorys: Array<GroupedHistory>;
  pageInfo: PageInfoType;
};

export type CompetitionRateResponse = {
  __typename?: 'CompetitionRateResponse';
  competitionRate?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<FieldError>>;
  memberCount?: Maybe<Scalars['String']>;
};

export type Consent = {
  __typename?: 'Consent';
  consent_code: Scalars['String'];
  consent_contents?: Maybe<Scalars['String']>;
  consent_group?: Maybe<Scalars['String']>;
  consent_title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Float']>;
  is_mandatory?: Maybe<Scalars['String']>;
  revision_date: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  app_contents?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  event_begin_date?: Maybe<Scalars['String']>;
  event_end_date?: Maybe<Scalars['String']>;
  event_id: Scalars['String'];
  represent_image_path?: Maybe<Scalars['String']>;
  represent_mobile_image_path?: Maybe<Scalars['String']>;
  represent_thumbnail_path?: Maybe<Scalars['String']>;
  share_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  web_contents?: Maybe<Scalars['String']>;
};

export type EventInput = {
  app_contents?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['String']>;
  event_begin_date?: InputMaybe<Scalars['String']>;
  event_end_date?: InputMaybe<Scalars['String']>;
  represent_image_path?: InputMaybe<Scalars['String']>;
  represent_mobile_image_path?: InputMaybe<Scalars['String']>;
  represent_thumbnail_path?: InputMaybe<Scalars['String']>;
  share_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['String']>;
  web_contents?: InputMaybe<Scalars['String']>;
};

export type EventsResponse = {
  __typename?: 'EventsResponse';
  events: Array<Event>;
  pageInfo: PageInfoType;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GroupedHistory = {
  __typename?: 'GroupedHistory';
  months: Array<GroupedHistoryMonth>;
  year: Scalars['String'];
};

export type GroupedHistoryDay = {
  __typename?: 'GroupedHistoryDay';
  day: Scalars['String'];
  histories: Array<CompanyHistory>;
};

export type GroupedHistoryMonth = {
  __typename?: 'GroupedHistoryMonth';
  days: Array<GroupedHistoryDay>;
  month: Scalars['String'];
};

export type HeaderNewResponse = {
  __typename?: 'HeaderNewResponse';
  newList: NewMenus;
};

export type InvestmentDisclosureDetailResponse = {
  __typename?: 'InvestmentDisclosureDetailResponse';
  board?: Maybe<InvestmentDisclosureList>;
};

export type InvestmentDisclosureList = {
  __typename?: 'InvestmentDisclosureList';
  board_category?: Maybe<Scalars['String']>;
  board_category_nm?: Maybe<Scalars['String']>;
  board_id?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  portfolio_id?: Maybe<Scalars['String']>;
  portfolio_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type InvestmentDisclosureListResponse = {
  __typename?: 'InvestmentDisclosureListResponse';
  boards: Array<InvestmentDisclosureList>;
  pageInfo: PageInfoType;
};

export type MagazineResponse = {
  __typename?: 'MagazineResponse';
  megazine?: Maybe<T_Magazine>;
  megazines: Array<T_Magazine>;
};

export type MagazinesResponse = {
  __typename?: 'MagazinesResponse';
  megazines: Array<T_Magazine>;
  pageInfo: PageInfoType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Event;
  createReception: ReceptionsPostResponse;
  getCommCode?: Maybe<CodeResponse>;
  pubSubMutation: Scalars['Boolean'];
  publisherMutation: Event;
  publisherMutation2: Event;
  sendMessage: Scalars['String'];
  updateEvent?: Maybe<Event>;
};


export type MutationCreateReceptionArgs = {
  email: Scalars['String'];
};


export type MutationGetCommCodeArgs = {
  code_id: Scalars['String'];
};


export type MutationSendMessageArgs = {
  name: Scalars['String'];
};


export type MutationUpdateEventArgs = {
  event_id: Scalars['String'];
  input: EventInput;
};

export type NewMenus = {
  __typename?: 'NewMenus';
  boardsCount?: Maybe<Scalars['Float']>;
  disclosuresCount?: Maybe<Scalars['Float']>;
  magazinesCount?: Maybe<Scalars['Float']>;
  portfoliosCount?: Maybe<Scalars['Float']>;
};

export type Notification2 = {
  __typename?: 'Notification2';
  date: Scalars['DateTime'];
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type NotificationEvent = {
  __typename?: 'NotificationEvent';
  date: Scalars['DateTime'];
  ids: Array<Scalars['String']>;
  items?: Maybe<Array<Event>>;
  type: NotificationUpdateTypes;
};

export type NotificationMessage = {
  __typename?: 'NotificationMessage';
  date: Scalars['DateTime'];
  ids: Array<Scalars['String']>;
  items?: Maybe<Array<Event>>;
  targetIds: Array<Scalars['String']>;
  type: NotificationUpdateTypes;
  userId?: Maybe<Scalars['String']>;
};

export enum NotificationUpdateTypes {
  Created = 'created',
  Deleted = 'deleted',
  Updated = 'updated'
}

export type PageInfoType = {
  __typename?: 'PageInfoType';
  curPage: Scalars['Float'];
  listLength: Scalars['Float'];
  totalLength: Scalars['Float'];
};

export type Popup = {
  __typename?: 'Popup';
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  end_at?: Maybe<Scalars['DateTime']>;
  is_active?: Maybe<Scalars['String']>;
  popup_id: Scalars['String'];
  popup_image_path?: Maybe<Scalars['String']>;
  popup_link_type?: Maybe<Scalars['String']>;
  popup_link_url?: Maybe<Scalars['String']>;
  popup_title?: Maybe<Scalars['String']>;
  popup_type?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type Portfolio = {
  __typename?: 'Portfolio';
  achieve_profit_rate?: Maybe<Scalars['Float']>;
  cashability_point?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  disposal_expecatation_date?: Maybe<Scalars['DateTime']>;
  disposal_fee?: Maybe<Scalars['Float']>;
  disposal_fee_method?: Maybe<Scalars['String']>;
  dividends_expecatation_date?: Maybe<Scalars['DateTime']>;
  expectation_profit_rate?: Maybe<Scalars['Float']>;
  fee_rate?: Maybe<Scalars['String']>;
  general_grade?: Maybe<Scalars['String']>;
  is_show?: Maybe<Scalars['String']>;
  is_tax?: Maybe<Scalars['String']>;
  is_vat?: Maybe<Scalars['String']>;
  magazin_link_url?: Maybe<Scalars['String']>;
  max_purchase_amount?: Maybe<Scalars['Float']>;
  min_purchase_amount?: Maybe<Scalars['Float']>;
  notificationCount?: Maybe<Scalars['Float']>;
  portfolioPurchases?: Maybe<Array<PortfolioPurchase>>;
  portfolio_code?: Maybe<Scalars['String']>;
  portfolio_id: Scalars['String'];
  profitability_point?: Maybe<Scalars['String']>;
  purchaseCount?: Maybe<Scalars['Float']>;
  purchase_end_date?: Maybe<Scalars['DateTime']>;
  purchase_fee?: Maybe<Scalars['Float']>;
  purchase_fee_method?: Maybe<Scalars['String']>;
  recruitment_amount?: Maybe<Scalars['Float']>;
  recruitment_begin_date?: Maybe<Scalars['DateTime']>;
  recruitment_end_date?: Maybe<Scalars['DateTime']>;
  recruitment_state?: Maybe<Scalars['String']>;
  recruitment_state_nm?: Maybe<Scalars['String']>;
  represent_image_path?: Maybe<Scalars['String']>;
  represent_thumbnail_image_path?: Maybe<Scalars['String']>;
  retraction_possible_date?: Maybe<Scalars['DateTime']>;
  share_url?: Maybe<Scalars['String']>;
  soldout_at?: Maybe<Scalars['DateTime']>;
  stability_point?: Maybe<Scalars['String']>;
  sub_title?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  total_piece_volume?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  vat_rate?: Maybe<Scalars['Float']>;
};

export type PortfolioBoard = {
  __typename?: 'PortfolioBoard';
  board?: Maybe<TBoard>;
  board_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  portfolio_id: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type PortfolioMessage = {
  __typename?: 'PortfolioMessage';
  date: Scalars['DateTime'];
  ids: Array<Scalars['String']>;
  items?: Maybe<Array<PortfolioPurchase>>;
  targetIds: Array<Scalars['String']>;
  type: NotificationUpdateTypes;
  userId?: Maybe<Scalars['String']>;
};

export type PortfolioPurchase = {
  __typename?: 'PortfolioPurchase';
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  is_confirm?: Maybe<Scalars['String']>;
  is_consent?: Maybe<Scalars['String']>;
  is_coupon?: Maybe<Scalars['String']>;
  member_id: Scalars['String'];
  offer_piece_volume?: Maybe<Scalars['Float']>;
  offer_total_amount?: Maybe<Scalars['Float']>;
  portfolio?: Maybe<Portfolio>;
  portfolio_id: Scalars['String'];
  purchase_at?: Maybe<Scalars['DateTime']>;
  purchase_fee_amount?: Maybe<Scalars['Float']>;
  purchase_id: Scalars['String'];
  purchase_piece_amount?: Maybe<Scalars['Float']>;
  purchase_piece_volume?: Maybe<Scalars['Float']>;
  purchase_state?: Maybe<Scalars['String']>;
  purchase_total_amount?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type PortfoliosResponse = {
  __typename?: 'PortfoliosResponse';
  pageInfo: PageInfoType;
  portfolios: Array<Portfolio>;
};

export type Query = {
  __typename?: 'Query';
  board?: Maybe<BoardResponse>;
  boardYears: BoardsResponse;
  boards: BoardsResponse;
  companyHistorys: CompanyHistorysResponse;
  event?: Maybe<Event>;
  events: EventsResponse;
  getCommCodes?: Maybe<CodeResponse>;
  getCompetitionRate: CompetitionRateResponse;
  getMaxProfitPercentage: PortfoliosResponse;
  headerNew: HeaderNewResponse;
  hello: Scalars['String'];
  investmentDisclosureDetail: InvestmentDisclosureDetailResponse;
  investmentDisclosureList: InvestmentDisclosureListResponse;
  isTermsRegistrationAllowed: Scalars['Boolean'];
  megazine?: Maybe<MagazineResponse>;
  megazines: MagazinesResponse;
  popup?: Maybe<Popup>;
  portfolios: PortfoliosResponse;
  relatedMediaNews: RelatedMediaNewsResponse;
  term: TermResponse;
  termCommCodes: TempCommCodeArrayResponse;
  terms: TermsResponse;
  topBoards: BoardsResponse;
};


export type QueryBoardArgs = {
  boardId: Scalars['String'];
};


export type QueryBoardYearsArgs = {
  boardCategory?: InputMaybe<Scalars['String']>;
  boardType: Scalars['String'];
};


export type QueryBoardsArgs = {
  boardCategory?: InputMaybe<Scalars['String']>;
  boardType: Scalars['String'];
  keyword?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  selectYear?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
};


export type QueryEventArgs = {
  eventId: Scalars['String'];
};


export type QueryEventsArgs = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryGetCommCodesArgs = {
  description?: InputMaybe<Scalars['String']>;
  upper_code_id: Scalars['String'];
};


export type QueryGetCompetitionRateArgs = {
  portfolio_id: Scalars['String'];
};


export type QueryInvestmentDisclosureDetailArgs = {
  board_id: Scalars['String'];
};


export type QueryInvestmentDisclosureListArgs = {
  boardCategory?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  portfolio_id?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
};


export type QueryIsTermsRegistrationAllowedArgs = {
  consent_code: Scalars['String'];
};


export type QueryMegazineArgs = {
  magazine_id: Scalars['String'];
};


export type QueryMegazinesArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  magazineType?: InputMaybe<Scalars['String']>;
  magazineTypeList?: InputMaybe<Array<Scalars['String']>>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryPortfoliosArgs = {
  doneYn?: InputMaybe<Scalars['Boolean']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  recruitment_state?: InputMaybe<Scalars['String']>;
};


export type QueryRelatedMediaNewsArgs = {
  boardId: Scalars['String'];
};


export type QueryTermArgs = {
  consent_code: Scalars['String'];
  revision_date: Scalars['String'];
};


export type QueryTermsArgs = {
  consent_code: Scalars['String'];
};

export type ReceptionsPostResponse = {
  __typename?: 'ReceptionsPostResponse';
  result?: Maybe<Scalars['String']>;
};

export type RelatedMediaNewsResponse = {
  __typename?: 'RelatedMediaNewsResponse';
  boardRelations: Array<BoardRelation>;
};

export type Subscription = {
  __typename?: 'Subscription';
  eventChanged: NotificationEvent;
  messageChanged: NotificationMessage;
  newNotification: Scalars['String'];
  portfolioPurchaseUpdates: PortfolioMessage;
  subscriptionWithFilter: Notification2;
};


export type SubscriptionMessageChangedArgs = {
  token: Scalars['String'];
};


export type SubscriptionPortfolioPurchaseUpdatesArgs = {
  portfolio_id: Scalars['String'];
};

export type TBoard = {
  __typename?: 'TBoard';
  boadr_thumbnail_path?: Maybe<Scalars['String']>;
  boardCategoryCommCode?: Maybe<TCommCode>;
  boardInquiries?: Maybe<Array<BoardInquiry>>;
  boardTypeCommCode?: Maybe<TCommCode>;
  board_category?: Maybe<Scalars['String']>;
  board_category_nm?: Maybe<Scalars['String']>;
  board_id: Scalars['String'];
  board_type?: Maybe<Scalars['String']>;
  board_type_nm?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Float']>;
  files?: Maybe<Array<BoardFiles>>;
  is_delete?: Maybe<Scalars['String']>;
  is_top_board?: Maybe<Scalars['String']>;
  portfolioBoard?: Maybe<PortfolioBoard>;
  press?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<BoardRelation>>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type TCommCode = {
  __typename?: 'TCommCode';
  code_id: Scalars['String'];
  code_image_path?: Maybe<Scalars['String']>;
  code_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Float']>;
  is_delete?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  upper_code_id?: Maybe<Scalars['String']>;
};

export type T_Magazine = {
  __typename?: 'T_MAGAZINE';
  author: Scalars['String'];
  contents: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  display_order: Scalars['Float'];
  is_delete: Scalars['String'];
  magazineTypeCommCode?: Maybe<TCommCode>;
  magazine_id: Scalars['String'];
  magazine_type: Scalars['String'];
  mid_title: Scalars['String'];
  represent_image_path: Scalars['String'];
  represent_thumbnail_path: Scalars['String'];
  share_url: Scalars['String'];
  small_title: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  updated_by: Scalars['String'];
};

export type TempCommCodeArrayResponse = {
  __typename?: 'TempCommCodeArrayResponse';
  tempCommCodeArray: Array<TCommCode>;
};

export type TermResponse = {
  __typename?: 'TermResponse';
  term: Consent;
};

export type TermsResponse = {
  __typename?: 'TermsResponse';
  terms: Array<Consent>;
};

export type YearInfo = {
  __typename?: 'YearInfo';
  year: Scalars['Int'];
};

export type BoardQueryVariables = Exact<{
  boardId: Scalars['String'];
}>;


export type BoardQuery = { __typename?: 'Query', board?: { __typename?: 'BoardResponse', board: { __typename?: 'TBoard', board_id: string, title?: string | null, contents?: string | null, created_at?: any | null, boardTypeCommCode?: { __typename?: 'TCommCode', code_id: string, code_name?: string | null } | null, boardCategoryCommCode?: { __typename?: 'TCommCode', code_id: string, code_name?: string | null } | null, files?: Array<{ __typename?: 'BoardFiles', file_id: string, cdn_file_path?: string | null, origin_file_name?: string | null }> | null } } | null };

export type BoardsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  boardCategory?: InputMaybe<Scalars['String']>;
  boardType: Scalars['String'];
  keyword?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
}>;


export type BoardsQuery = { __typename?: 'Query', boards: { __typename?: 'BoardsResponse', boards: Array<{ __typename?: 'TBoard', board_category?: string | null, board_category_nm?: string | null, board_id: string, board_type?: string | null, board_type_nm?: string | null, title?: string | null, contents?: string | null, created_at?: any | null, boadr_thumbnail_path?: string | null }>, pageInfo: { __typename?: 'PageInfoType', curPage: number, listLength: number, totalLength: number } } };

export type EventQueryVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', event_id: string, title?: string | null, contents?: string | null, event_end_date?: string | null } | null };

export type EventsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type EventsQuery = { __typename?: 'Query', events: { __typename?: 'EventsResponse', events: Array<{ __typename?: 'Event', event_id: string, title?: string | null, represent_thumbnail_path?: string | null, created_at?: any | null }>, pageInfo: { __typename?: 'PageInfoType', curPage: number, listLength: number, totalLength: number } } };

export type GetCompetitionRateQueryVariables = Exact<{
  portfolio_id: Scalars['String'];
}>;


export type GetCompetitionRateQuery = { __typename?: 'Query', getCompetitionRate: { __typename?: 'CompetitionRateResponse', competitionRate?: string | null, memberCount?: string | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type HeaderNewQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderNewQuery = { __typename?: 'Query', headerNew: { __typename?: 'HeaderNewResponse', newList: { __typename?: 'NewMenus', portfoliosCount?: number | null, disclosuresCount?: number | null, magazinesCount?: number | null, boardsCount?: number | null } } };

export type InvestmentDisclosureDetailQueryVariables = Exact<{
  board_id: Scalars['String'];
}>;


export type InvestmentDisclosureDetailQuery = { __typename?: 'Query', investmentDisclosureDetail: { __typename?: 'InvestmentDisclosureDetailResponse', board?: { __typename?: 'InvestmentDisclosureList', board_id?: string | null, board_category?: string | null, board_category_nm?: string | null, title?: string | null, contents?: string | null, portfolio_title?: string | null, portfolio_id?: string | null, created_at?: any | null } | null } };

export type InvestmentDisclosureListQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  portfolio_id?: InputMaybe<Scalars['String']>;
  boardCategory?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
}>;


export type InvestmentDisclosureListQuery = { __typename?: 'Query', investmentDisclosureList: { __typename?: 'InvestmentDisclosureListResponse', boards: Array<{ __typename?: 'InvestmentDisclosureList', board_id?: string | null, board_category?: string | null, board_category_nm?: string | null, title?: string | null, portfolio_title?: string | null, created_at?: any | null }>, pageInfo: { __typename?: 'PageInfoType', curPage: number, listLength: number, totalLength: number } } };

export type MainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MainPageQuery = { __typename?: 'Query', megazines: { __typename?: 'MagazinesResponse', megazines: Array<{ __typename?: 'T_MAGAZINE', magazine_id: string, title: string, mid_title: string, small_title: string, represent_thumbnail_path: string, created_at: any }> }, press: { __typename?: 'BoardsResponse', boards: Array<{ __typename?: 'TBoard', board_category?: string | null, board_id: string, board_type?: string | null, title?: string | null, press?: string | null, contents?: string | null, created_at?: any | null, boadr_thumbnail_path?: string | null }> }, notices: { __typename?: 'BoardsResponse', boards: Array<{ __typename?: 'TBoard', board_category?: string | null, board_category_nm?: string | null, board_id: string, board_type?: string | null, board_type_nm?: string | null, title?: string | null, contents?: string | null, created_at?: any | null, boadr_thumbnail_path?: string | null }> } };

export type MegazineQueryVariables = Exact<{
  magazine_id: Scalars['String'];
}>;


export type MegazineQuery = { __typename?: 'Query', megazine?: { __typename?: 'MagazineResponse', megazine?: { __typename?: 'T_MAGAZINE', title: string, author: string, contents: string, magazine_id: string, mid_title: string, small_title: string, represent_thumbnail_path: string, created_at: any } | null, megazines: Array<{ __typename?: 'T_MAGAZINE', magazine_id: string, title: string, mid_title: string, small_title: string, represent_thumbnail_path: string, created_at: any }> } | null };

export type MegazinesQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  magazineType?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
}>;


export type MegazinesQuery = { __typename?: 'Query', megazines: { __typename?: 'MagazinesResponse', megazines: Array<{ __typename?: 'T_MAGAZINE', magazine_id: string, title: string, mid_title: string, small_title: string, represent_thumbnail_path: string, created_at: any }>, pageInfo: { __typename?: 'PageInfoType', curPage: number, listLength: number, totalLength: number } } };

export type PopupQueryVariables = Exact<{ [key: string]: never; }>;


export type PopupQuery = { __typename?: 'Query', popup?: { __typename?: 'Popup', popup_link_url?: string | null, popup_image_path?: string | null } | null };

export type PortfoliosQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  recruitment_state?: InputMaybe<Scalars['String']>;
  doneYn?: InputMaybe<Scalars['Boolean']>;
}>;


export type PortfoliosQuery = { __typename?: 'Query', portfolios: { __typename?: 'PortfoliosResponse', portfolios: Array<{ __typename?: 'Portfolio', portfolio_id: string, title?: string | null, recruitment_begin_date?: any | null, recruitment_end_date?: any | null, represent_thumbnail_image_path?: string | null, sub_title?: string | null, share_url?: string | null, portfolio_code?: string | null, recruitment_state?: string | null, notificationCount?: number | null, purchaseCount?: number | null }>, pageInfo: { __typename?: 'PageInfoType', curPage: number, listLength: number, totalLength: number } } };

export type ProductPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductPageQuery = { __typename?: 'Query', getMaxProfitPercentage: { __typename?: 'PortfoliosResponse', portfolios: Array<{ __typename?: 'Portfolio', title?: string | null, achieve_profit_rate?: number | null }> }, portfoliosSelling: { __typename?: 'PortfoliosResponse', portfolios: Array<{ __typename?: 'Portfolio', portfolio_id: string, title?: string | null, recruitment_begin_date?: any | null, recruitment_end_date?: any | null, represent_thumbnail_image_path?: string | null, sub_title?: string | null, share_url?: string | null, portfolio_code?: string | null, recruitment_state?: string | null, purchaseCount?: number | null }> }, upcomingPortfolios: { __typename?: 'PortfoliosResponse', portfolios: Array<{ __typename?: 'Portfolio', portfolio_id: string, title?: string | null, recruitment_begin_date?: any | null, recruitment_end_date?: any | null, represent_thumbnail_image_path?: string | null, sub_title?: string | null, share_url?: string | null, notificationCount?: number | null, portfolio_code?: string | null, recruitment_state?: string | null, purchaseCount?: number | null }> } };

export type SupportPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SupportPageQuery = { __typename?: 'Query', notices: { __typename?: 'BoardsResponse', boards: Array<{ __typename?: 'TBoard', board_category?: string | null, board_category_nm?: string | null, board_id: string, board_type?: string | null, board_type_nm?: string | null, title?: string | null, contents?: string | null, created_at?: any | null, boadr_thumbnail_path?: string | null }> }, faqCategory?: { __typename?: 'CodeResponse', commCodes: Array<{ __typename?: 'TCommCode', code_id: string, code_name?: string | null }> } | null };

export type TermCommCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type TermCommCodesQuery = { __typename?: 'Query', termCommCodes: { __typename?: 'TempCommCodeArrayResponse', tempCommCodeArray: Array<{ __typename?: 'TCommCode', code_id: string, code_name?: string | null }> } };

export type TermListPageQueryVariables = Exact<{
  consentCode: Scalars['String'];
}>;


export type TermListPageQuery = { __typename?: 'Query', isTermsRegistrationAllowed: boolean, termCommCodes: { __typename?: 'TempCommCodeArrayResponse', tempCommCodeArray: Array<{ __typename?: 'TCommCode', code_id: string, code_name?: string | null }> }, terms: { __typename?: 'TermsResponse', terms: Array<{ __typename?: 'Consent', consent_code: string, revision_date: string, consent_group?: string | null, consent_title?: string | null, consent_contents?: string | null, is_mandatory?: string | null, created_at?: any | null, created_by?: string | null }> } };

export type EventChangedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type EventChangedSubscription = { __typename?: 'Subscription', eventChanged: { __typename?: 'NotificationEvent', ids: Array<string>, type: NotificationUpdateTypes, date: any, items?: Array<{ __typename?: 'Event', event_id: string, title?: string | null, contents?: string | null, event_end_date?: string | null }> | null } };


export const BoardDocument = gql`
    query Board($boardId: String!) {
  board(boardId: $boardId) {
    board {
      board_id
      title
      contents
      created_at
      boardTypeCommCode {
        code_id
        code_name
      }
      boardCategoryCommCode {
        code_id
        code_name
      }
      files {
        file_id
        cdn_file_path
        origin_file_name
      }
    }
  }
}
    `;

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useBoardQuery(baseOptions: Apollo.QueryHookOptions<BoardQuery, BoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options);
      }
export function useBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardQuery, BoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options);
        }
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>;
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>;
export type BoardQueryResult = Apollo.QueryResult<BoardQuery, BoardQueryVariables>;
export const BoardsDocument = gql`
    query Boards($page: Int!, $pageSize: Int!, $boardCategory: String, $boardType: String!, $keyword: String, $sortType: String) {
  boards(
    page: $page
    pageSize: $pageSize
    boardCategory: $boardCategory
    boardType: $boardType
    keyword: $keyword
    sortType: $sortType
  ) {
    boards {
      board_category
      board_category_nm
      board_id
      board_type
      board_type_nm
      title
      contents
      created_at
      boadr_thumbnail_path
    }
    pageInfo {
      curPage
      listLength
      totalLength
    }
  }
}
    `;

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      boardCategory: // value for 'boardCategory'
 *      boardType: // value for 'boardType'
 *      keyword: // value for 'keyword'
 *      sortType: // value for 'sortType'
 *   },
 * });
 */
export function useBoardsQuery(baseOptions: Apollo.QueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
      }
export function useBoardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
        }
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>;
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>;
export type BoardsQueryResult = Apollo.QueryResult<BoardsQuery, BoardsQueryVariables>;
export const EventDocument = gql`
    query Event($eventId: String!) {
  event(eventId: $eventId) {
    event_id
    title
    contents
    event_end_date
  }
}
    `;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useEventQuery(baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const EventsDocument = gql`
    query Events($page: Int!, $pageSize: Int!) {
  events(page: $page, pageSize: $pageSize) {
    events {
      event_id
      title
      represent_thumbnail_path
      created_at
    }
    pageInfo {
      curPage
      listLength
      totalLength
    }
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useEventsQuery(baseOptions: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const GetCompetitionRateDocument = gql`
    query getCompetitionRate($portfolio_id: String!) {
  getCompetitionRate(portfolio_id: $portfolio_id) {
    errors {
      field
      message
    }
    competitionRate
    memberCount
  }
}
    `;

/**
 * __useGetCompetitionRateQuery__
 *
 * To run a query within a React component, call `useGetCompetitionRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompetitionRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompetitionRateQuery({
 *   variables: {
 *      portfolio_id: // value for 'portfolio_id'
 *   },
 * });
 */
export function useGetCompetitionRateQuery(baseOptions: Apollo.QueryHookOptions<GetCompetitionRateQuery, GetCompetitionRateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompetitionRateQuery, GetCompetitionRateQueryVariables>(GetCompetitionRateDocument, options);
      }
export function useGetCompetitionRateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompetitionRateQuery, GetCompetitionRateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompetitionRateQuery, GetCompetitionRateQueryVariables>(GetCompetitionRateDocument, options);
        }
export type GetCompetitionRateQueryHookResult = ReturnType<typeof useGetCompetitionRateQuery>;
export type GetCompetitionRateLazyQueryHookResult = ReturnType<typeof useGetCompetitionRateLazyQuery>;
export type GetCompetitionRateQueryResult = Apollo.QueryResult<GetCompetitionRateQuery, GetCompetitionRateQueryVariables>;
export const HeaderNewDocument = gql`
    query HeaderNew {
  headerNew {
    newList {
      portfoliosCount
      disclosuresCount
      magazinesCount
      boardsCount
    }
  }
}
    `;

/**
 * __useHeaderNewQuery__
 *
 * To run a query within a React component, call `useHeaderNewQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderNewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderNewQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeaderNewQuery(baseOptions?: Apollo.QueryHookOptions<HeaderNewQuery, HeaderNewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeaderNewQuery, HeaderNewQueryVariables>(HeaderNewDocument, options);
      }
export function useHeaderNewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeaderNewQuery, HeaderNewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeaderNewQuery, HeaderNewQueryVariables>(HeaderNewDocument, options);
        }
export type HeaderNewQueryHookResult = ReturnType<typeof useHeaderNewQuery>;
export type HeaderNewLazyQueryHookResult = ReturnType<typeof useHeaderNewLazyQuery>;
export type HeaderNewQueryResult = Apollo.QueryResult<HeaderNewQuery, HeaderNewQueryVariables>;
export const InvestmentDisclosureDetailDocument = gql`
    query InvestmentDisclosureDetail($board_id: String!) {
  investmentDisclosureDetail(board_id: $board_id) {
    board {
      board_id
      board_category
      board_category_nm
      title
      contents
      portfolio_title
      portfolio_id
      created_at
    }
  }
}
    `;

/**
 * __useInvestmentDisclosureDetailQuery__
 *
 * To run a query within a React component, call `useInvestmentDisclosureDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestmentDisclosureDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestmentDisclosureDetailQuery({
 *   variables: {
 *      board_id: // value for 'board_id'
 *   },
 * });
 */
export function useInvestmentDisclosureDetailQuery(baseOptions: Apollo.QueryHookOptions<InvestmentDisclosureDetailQuery, InvestmentDisclosureDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvestmentDisclosureDetailQuery, InvestmentDisclosureDetailQueryVariables>(InvestmentDisclosureDetailDocument, options);
      }
export function useInvestmentDisclosureDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvestmentDisclosureDetailQuery, InvestmentDisclosureDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvestmentDisclosureDetailQuery, InvestmentDisclosureDetailQueryVariables>(InvestmentDisclosureDetailDocument, options);
        }
export type InvestmentDisclosureDetailQueryHookResult = ReturnType<typeof useInvestmentDisclosureDetailQuery>;
export type InvestmentDisclosureDetailLazyQueryHookResult = ReturnType<typeof useInvestmentDisclosureDetailLazyQuery>;
export type InvestmentDisclosureDetailQueryResult = Apollo.QueryResult<InvestmentDisclosureDetailQuery, InvestmentDisclosureDetailQueryVariables>;
export const InvestmentDisclosureListDocument = gql`
    query investmentDisclosureList($page: Int!, $pageSize: Int!, $portfolio_id: String, $boardCategory: String, $keyword: String, $sortType: String) {
  investmentDisclosureList(
    page: $page
    pageSize: $pageSize
    portfolio_id: $portfolio_id
    boardCategory: $boardCategory
    keyword: $keyword
    sortType: $sortType
  ) {
    boards {
      board_id
      board_category
      board_category_nm
      title
      portfolio_title
      created_at
    }
    pageInfo {
      curPage
      listLength
      totalLength
    }
  }
}
    `;

/**
 * __useInvestmentDisclosureListQuery__
 *
 * To run a query within a React component, call `useInvestmentDisclosureListQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestmentDisclosureListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestmentDisclosureListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      portfolio_id: // value for 'portfolio_id'
 *      boardCategory: // value for 'boardCategory'
 *      keyword: // value for 'keyword'
 *      sortType: // value for 'sortType'
 *   },
 * });
 */
export function useInvestmentDisclosureListQuery(baseOptions: Apollo.QueryHookOptions<InvestmentDisclosureListQuery, InvestmentDisclosureListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvestmentDisclosureListQuery, InvestmentDisclosureListQueryVariables>(InvestmentDisclosureListDocument, options);
      }
export function useInvestmentDisclosureListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvestmentDisclosureListQuery, InvestmentDisclosureListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvestmentDisclosureListQuery, InvestmentDisclosureListQueryVariables>(InvestmentDisclosureListDocument, options);
        }
export type InvestmentDisclosureListQueryHookResult = ReturnType<typeof useInvestmentDisclosureListQuery>;
export type InvestmentDisclosureListLazyQueryHookResult = ReturnType<typeof useInvestmentDisclosureListLazyQuery>;
export type InvestmentDisclosureListQueryResult = Apollo.QueryResult<InvestmentDisclosureListQuery, InvestmentDisclosureListQueryVariables>;
export const MainPageDocument = gql`
    query MainPage {
  megazines(page: 1, pageSize: 8, magazineTypeList: ["MZT0101", "MZT0102"]) {
    megazines {
      magazine_id
      title
      mid_title
      small_title
      represent_thumbnail_path
      created_at
    }
  }
  press: topBoards {
    boards {
      board_category
      board_id
      board_type
      title
      press
      contents
      created_at
      boadr_thumbnail_path
    }
  }
  notices: boards(page: 1, pageSize: 2, boardType: "BRT02") {
    boards {
      board_category
      board_category_nm
      board_id
      board_type
      board_type_nm
      title
      contents
      created_at
      boadr_thumbnail_path
    }
  }
}
    `;

/**
 * __useMainPageQuery__
 *
 * To run a query within a React component, call `useMainPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useMainPageQuery(baseOptions?: Apollo.QueryHookOptions<MainPageQuery, MainPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MainPageQuery, MainPageQueryVariables>(MainPageDocument, options);
      }
export function useMainPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainPageQuery, MainPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MainPageQuery, MainPageQueryVariables>(MainPageDocument, options);
        }
export type MainPageQueryHookResult = ReturnType<typeof useMainPageQuery>;
export type MainPageLazyQueryHookResult = ReturnType<typeof useMainPageLazyQuery>;
export type MainPageQueryResult = Apollo.QueryResult<MainPageQuery, MainPageQueryVariables>;
export const MegazineDocument = gql`
    query Megazine($magazine_id: String!) {
  megazine(magazine_id: $magazine_id) {
    megazine {
      title
      author
      contents
      magazine_id
      mid_title
      small_title
      represent_thumbnail_path
      created_at
    }
    megazines {
      magazine_id
      title
      mid_title
      small_title
      represent_thumbnail_path
      created_at
    }
  }
}
    `;

/**
 * __useMegazineQuery__
 *
 * To run a query within a React component, call `useMegazineQuery` and pass it any options that fit your needs.
 * When your component renders, `useMegazineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMegazineQuery({
 *   variables: {
 *      magazine_id: // value for 'magazine_id'
 *   },
 * });
 */
export function useMegazineQuery(baseOptions: Apollo.QueryHookOptions<MegazineQuery, MegazineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MegazineQuery, MegazineQueryVariables>(MegazineDocument, options);
      }
export function useMegazineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MegazineQuery, MegazineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MegazineQuery, MegazineQueryVariables>(MegazineDocument, options);
        }
export type MegazineQueryHookResult = ReturnType<typeof useMegazineQuery>;
export type MegazineLazyQueryHookResult = ReturnType<typeof useMegazineLazyQuery>;
export type MegazineQueryResult = Apollo.QueryResult<MegazineQuery, MegazineQueryVariables>;
export const MegazinesDocument = gql`
    query Megazines($page: Int!, $pageSize: Int!, $magazineType: String, $keyword: String) {
  megazines(
    page: $page
    pageSize: $pageSize
    magazineType: $magazineType
    keyword: $keyword
  ) {
    megazines {
      magazine_id
      title
      mid_title
      small_title
      represent_thumbnail_path
      created_at
    }
    pageInfo {
      curPage
      listLength
      totalLength
    }
  }
}
    `;

/**
 * __useMegazinesQuery__
 *
 * To run a query within a React component, call `useMegazinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMegazinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMegazinesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      magazineType: // value for 'magazineType'
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useMegazinesQuery(baseOptions: Apollo.QueryHookOptions<MegazinesQuery, MegazinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MegazinesQuery, MegazinesQueryVariables>(MegazinesDocument, options);
      }
export function useMegazinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MegazinesQuery, MegazinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MegazinesQuery, MegazinesQueryVariables>(MegazinesDocument, options);
        }
export type MegazinesQueryHookResult = ReturnType<typeof useMegazinesQuery>;
export type MegazinesLazyQueryHookResult = ReturnType<typeof useMegazinesLazyQuery>;
export type MegazinesQueryResult = Apollo.QueryResult<MegazinesQuery, MegazinesQueryVariables>;
export const PopupDocument = gql`
    query Popup {
  popup {
    popup_link_url
    popup_image_path
  }
}
    `;

/**
 * __usePopupQuery__
 *
 * To run a query within a React component, call `usePopupQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopupQuery({
 *   variables: {
 *   },
 * });
 */
export function usePopupQuery(baseOptions?: Apollo.QueryHookOptions<PopupQuery, PopupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopupQuery, PopupQueryVariables>(PopupDocument, options);
      }
export function usePopupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopupQuery, PopupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopupQuery, PopupQueryVariables>(PopupDocument, options);
        }
export type PopupQueryHookResult = ReturnType<typeof usePopupQuery>;
export type PopupLazyQueryHookResult = ReturnType<typeof usePopupLazyQuery>;
export type PopupQueryResult = Apollo.QueryResult<PopupQuery, PopupQueryVariables>;
export const PortfoliosDocument = gql`
    query Portfolios($page: Int!, $pageSize: Int!, $recruitment_state: String, $doneYn: Boolean) {
  portfolios(
    page: $page
    pageSize: $pageSize
    recruitment_state: $recruitment_state
    doneYn: $doneYn
  ) {
    portfolios {
      portfolio_id
      title
      recruitment_begin_date
      recruitment_end_date
      represent_thumbnail_image_path
      sub_title
      share_url
      portfolio_id
      portfolio_code
      recruitment_state
      notificationCount
      purchaseCount
    }
    pageInfo {
      curPage
      listLength
      totalLength
    }
  }
}
    `;

/**
 * __usePortfoliosQuery__
 *
 * To run a query within a React component, call `usePortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfoliosQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      recruitment_state: // value for 'recruitment_state'
 *      doneYn: // value for 'doneYn'
 *   },
 * });
 */
export function usePortfoliosQuery(baseOptions: Apollo.QueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, options);
      }
export function usePortfoliosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, options);
        }
export type PortfoliosQueryHookResult = ReturnType<typeof usePortfoliosQuery>;
export type PortfoliosLazyQueryHookResult = ReturnType<typeof usePortfoliosLazyQuery>;
export type PortfoliosQueryResult = Apollo.QueryResult<PortfoliosQuery, PortfoliosQueryVariables>;
export const ProductPageDocument = gql`
    query ProductPage {
  getMaxProfitPercentage {
    portfolios {
      title
      achieve_profit_rate
    }
  }
  portfoliosSelling: portfolios(
    page: 1
    pageSize: 5
    recruitment_state: "PRS0102"
  ) {
    portfolios {
      portfolio_id
      title
      recruitment_begin_date
      recruitment_end_date
      represent_thumbnail_image_path
      sub_title
      share_url
      portfolio_id
      portfolio_code
      recruitment_state
      purchaseCount
    }
  }
  upcomingPortfolios: portfolios(
    page: 1
    pageSize: 5
    recruitment_state: "PRS0101"
  ) {
    portfolios {
      portfolio_id
      title
      recruitment_begin_date
      recruitment_end_date
      represent_thumbnail_image_path
      sub_title
      share_url
      portfolio_id
      notificationCount
      portfolio_code
      recruitment_state
      purchaseCount
    }
  }
}
    `;

/**
 * __useProductPageQuery__
 *
 * To run a query within a React component, call `useProductPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductPageQuery, ProductPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductPageQuery, ProductPageQueryVariables>(ProductPageDocument, options);
      }
export function useProductPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductPageQuery, ProductPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductPageQuery, ProductPageQueryVariables>(ProductPageDocument, options);
        }
export type ProductPageQueryHookResult = ReturnType<typeof useProductPageQuery>;
export type ProductPageLazyQueryHookResult = ReturnType<typeof useProductPageLazyQuery>;
export type ProductPageQueryResult = Apollo.QueryResult<ProductPageQuery, ProductPageQueryVariables>;
export const SupportPageDocument = gql`
    query SupportPage {
  notices: boards(page: 1, pageSize: 2, boardType: "BRT02") {
    boards {
      board_category
      board_category_nm
      board_id
      board_type
      board_type_nm
      title
      contents
      created_at
      boadr_thumbnail_path
    }
  }
  faqCategory: getCommCodes(upper_code_id: "BRT03") {
    commCodes {
      code_id
      code_name
    }
  }
}
    `;

/**
 * __useSupportPageQuery__
 *
 * To run a query within a React component, call `useSupportPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupportPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupportPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useSupportPageQuery(baseOptions?: Apollo.QueryHookOptions<SupportPageQuery, SupportPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupportPageQuery, SupportPageQueryVariables>(SupportPageDocument, options);
      }
export function useSupportPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupportPageQuery, SupportPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupportPageQuery, SupportPageQueryVariables>(SupportPageDocument, options);
        }
export type SupportPageQueryHookResult = ReturnType<typeof useSupportPageQuery>;
export type SupportPageLazyQueryHookResult = ReturnType<typeof useSupportPageLazyQuery>;
export type SupportPageQueryResult = Apollo.QueryResult<SupportPageQuery, SupportPageQueryVariables>;
export const TermCommCodesDocument = gql`
    query TermCommCodes {
  termCommCodes {
    tempCommCodeArray {
      code_id
      code_name
    }
  }
}
    `;

/**
 * __useTermCommCodesQuery__
 *
 * To run a query within a React component, call `useTermCommCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermCommCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermCommCodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTermCommCodesQuery(baseOptions?: Apollo.QueryHookOptions<TermCommCodesQuery, TermCommCodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TermCommCodesQuery, TermCommCodesQueryVariables>(TermCommCodesDocument, options);
      }
export function useTermCommCodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TermCommCodesQuery, TermCommCodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TermCommCodesQuery, TermCommCodesQueryVariables>(TermCommCodesDocument, options);
        }
export type TermCommCodesQueryHookResult = ReturnType<typeof useTermCommCodesQuery>;
export type TermCommCodesLazyQueryHookResult = ReturnType<typeof useTermCommCodesLazyQuery>;
export type TermCommCodesQueryResult = Apollo.QueryResult<TermCommCodesQuery, TermCommCodesQueryVariables>;
export const TermListPageDocument = gql`
    query TermListPage($consentCode: String!) {
  termCommCodes {
    tempCommCodeArray {
      code_id
      code_name
    }
  }
  terms(consent_code: $consentCode) {
    terms {
      consent_code
      revision_date
      consent_group
      consent_title
      consent_contents
      is_mandatory
      created_at
      created_by
    }
  }
  isTermsRegistrationAllowed(consent_code: $consentCode)
}
    `;

/**
 * __useTermListPageQuery__
 *
 * To run a query within a React component, call `useTermListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermListPageQuery({
 *   variables: {
 *      consentCode: // value for 'consentCode'
 *   },
 * });
 */
export function useTermListPageQuery(baseOptions: Apollo.QueryHookOptions<TermListPageQuery, TermListPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TermListPageQuery, TermListPageQueryVariables>(TermListPageDocument, options);
      }
export function useTermListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TermListPageQuery, TermListPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TermListPageQuery, TermListPageQueryVariables>(TermListPageDocument, options);
        }
export type TermListPageQueryHookResult = ReturnType<typeof useTermListPageQuery>;
export type TermListPageLazyQueryHookResult = ReturnType<typeof useTermListPageLazyQuery>;
export type TermListPageQueryResult = Apollo.QueryResult<TermListPageQuery, TermListPageQueryVariables>;
export const EventChangedDocument = gql`
    subscription EventChanged {
  eventChanged {
    ids
    type
    items {
      event_id
      title
      contents
      event_end_date
    }
    date
  }
}
    `;

/**
 * __useEventChangedSubscription__
 *
 * To run a query within a React component, call `useEventChangedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useEventChangedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventChangedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useEventChangedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<EventChangedSubscription, EventChangedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<EventChangedSubscription, EventChangedSubscriptionVariables>(EventChangedDocument, options);
      }
export type EventChangedSubscriptionHookResult = ReturnType<typeof useEventChangedSubscription>;
export type EventChangedSubscriptionResult = Apollo.SubscriptionResult<EventChangedSubscription>;