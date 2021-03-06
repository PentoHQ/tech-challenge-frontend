import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
  uuid: any
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "running_sessions" */
  running_sessions: Array<Running_Sessions>
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootRunning_SessionsArgs = {
  distinct_on?: Maybe<Array<Running_Sessions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Running_Sessions_Order_By>>
  where?: Maybe<Running_Sessions_Bool_Exp>
}

export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sessions_Order_By>>
  where?: Maybe<Sessions_Bool_Exp>
}

export type Query_RootSessions_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

/**
 * Only one session per user
 *
 *
 * columns and relationships of "running_sessions"
 */
export type Running_Sessions = {
  __typename?: 'running_sessions'
  id: Scalars['uuid']
  name: Scalars['String']
  startDate?: Maybe<Scalars['timestamptz']>
}

/** Boolean expression to filter rows from the table "running_sessions". All fields are combined with a logical 'AND'. */
export type Running_Sessions_Bool_Exp = {
  _and?: Maybe<Array<Running_Sessions_Bool_Exp>>
  _not?: Maybe<Running_Sessions_Bool_Exp>
  _or?: Maybe<Array<Running_Sessions_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  startDate?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "running_sessions" */
export enum Running_Sessions_Constraint {
  /** unique or primary key constraint */
  RunningSessionsIdKey = 'running_sessions_id_key',
  /** unique or primary key constraint */
  RunningSessionsPkey = 'running_sessions_pkey',
  /** unique or primary key constraint */
  RunningSessionsUserIdKey = 'running_sessions_userId_key',
}

/** input type for inserting data into table "running_sessions" */
export type Running_Sessions_Insert_Input = {
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "running_sessions" */
export type Running_Sessions_Mutation_Response = {
  __typename?: 'running_sessions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Running_Sessions>
}

/** on conflict condition type for table "running_sessions" */
export type Running_Sessions_On_Conflict = {
  constraint: Running_Sessions_Constraint
  update_columns: Array<Running_Sessions_Update_Column>
  where?: Maybe<Running_Sessions_Bool_Exp>
}

/** Ordering options when selecting data from "running_sessions". */
export type Running_Sessions_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  startDate?: Maybe<Order_By>
}

/** select columns of table "running_sessions" */
export enum Running_Sessions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'startDate',
}

/** input type for updating data in table "running_sessions" */
export type Running_Sessions_Set_Input = {
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "running_sessions" */
export enum Running_Sessions_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'startDate',
}

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions'
  endDate: Scalars['timestamptz']
  id: Scalars['uuid']
  name: Scalars['String']
  startDate: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Bool_Exp>>
  _not?: Maybe<Sessions_Bool_Exp>
  _or?: Maybe<Array<Sessions_Bool_Exp>>
  endDate?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  startDate?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsPkey = 'sessions_pkey',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "running_sessions" */
  delete_running_sessions?: Maybe<Running_Sessions_Mutation_Response>
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>
  /** insert data into the table: "running_sessions" */
  insert_running_sessions?: Maybe<Running_Sessions_Mutation_Response>
  /** insert a single row into the table: "running_sessions" */
  insert_running_sessions_one?: Maybe<Running_Sessions>
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>
  /** update data of the table: "running_sessions" */
  update_running_sessions?: Maybe<Running_Sessions_Mutation_Response>
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>
}

/** mutation root */
export type Mutation_RootDelete_Running_SessionsArgs = {
  where: Running_Sessions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_Running_SessionsArgs = {
  objects: Array<Running_Sessions_Insert_Input>
  on_conflict?: Maybe<Running_Sessions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Running_Sessions_OneArgs = {
  object: Running_Sessions_Insert_Input
  on_conflict?: Maybe<Running_Sessions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>
  on_conflict?: Maybe<Sessions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input
  on_conflict?: Maybe<Sessions_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Running_SessionsArgs = {
  _set?: Maybe<Running_Sessions_Set_Input>
  where: Running_Sessions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: Maybe<Sessions_Set_Input>
  where: Sessions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: Maybe<Sessions_Set_Input>
  pk_columns: Sessions_Pk_Columns_Input
}

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>
}

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint
  update_columns: Array<Sessions_Update_Column>
  where?: Maybe<Sessions_Bool_Exp>
}

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  endDate?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  startDate?: Maybe<Order_By>
}

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'startDate',
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  endDate?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'startDate',
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "running_sessions" */
  running_sessions: Array<Running_Sessions>
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Subscription_RootRunning_SessionsArgs = {
  distinct_on?: Maybe<Array<Running_Sessions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Running_Sessions_Order_By>>
  where?: Maybe<Running_Sessions_Bool_Exp>
}

export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sessions_Order_By>>
  where?: Maybe<Sessions_Bool_Exp>
}

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  /** Filled from auth0 */
  id: Scalars['String']
  name: Scalars['String']
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  id?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  endDate?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['timestamptz']>
}

export type SessionsQueryQueryVariables = Exact<{ [key: string]: never }>

export type SessionsQueryQuery = {
  sessions: Array<
    { __typename?: 'sessions' } & Pick<Sessions, 'id' | 'name' | 'startDate' | 'endDate'>
  >
}

export type CreateSessionMutationVariables = Exact<{
  input: Sessions_Insert_Input
}>

export type CreateSessionMutation = {
  insert_sessions_one?: Maybe<
    { __typename?: 'sessions' } & Pick<Sessions, 'id' | 'name' | 'startDate' | 'endDate'>
  >
  delete_running_sessions?: Maybe<
    { __typename?: 'running_sessions_mutation_response' } & Pick<
      Running_Sessions_Mutation_Response,
      'affected_rows'
    >
  >
}

export type RunningSessionQueryVariables = Exact<{ [key: string]: never }>

export type RunningSessionQuery = {
  running_sessions: Array<
    { __typename?: 'running_sessions' } & Pick<Running_Sessions, 'name' | 'startDate'>
  >
}

export type StartSessionMutationVariables = Exact<{
  input: Running_Sessions_Insert_Input
}>

export type StartSessionMutation = {
  insert_running_sessions_one?: Maybe<
    { __typename?: 'running_sessions' } & Pick<Running_Sessions, 'id' | 'name' | 'startDate'>
  >
}

export const SessionsQueryDocument = gql`
  query SessionsQuery {
    sessions {
      id
      name
      startDate
      endDate
    }
  }
`

/**
 * __useSessionsQueryQuery__
 *
 * To run a query within a React component, call `useSessionsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionsQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<SessionsQueryQuery, SessionsQueryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SessionsQueryQuery, SessionsQueryQueryVariables>(
    SessionsQueryDocument,
    options,
  )
}
export function useSessionsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SessionsQueryQuery, SessionsQueryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SessionsQueryQuery, SessionsQueryQueryVariables>(
    SessionsQueryDocument,
    options,
  )
}
export type SessionsQueryQueryHookResult = ReturnType<typeof useSessionsQueryQuery>
export type SessionsQueryLazyQueryHookResult = ReturnType<typeof useSessionsQueryLazyQuery>
export type SessionsQueryQueryResult = Apollo.QueryResult<
  SessionsQueryQuery,
  SessionsQueryQueryVariables
>
export const CreateSessionDocument = gql`
  mutation createSession($input: sessions_insert_input!) {
    insert_sessions_one(object: $input) {
      id
      name
      startDate
      endDate
    }
    delete_running_sessions(where: {}) {
      affected_rows
    }
  }
`
export type CreateSessionMutationFn = Apollo.MutationFunction<
  CreateSessionMutation,
  CreateSessionMutationVariables
>

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(
    CreateSessionDocument,
    options,
  )
}
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<
  CreateSessionMutation,
  CreateSessionMutationVariables
>
export const RunningSessionDocument = gql`
  query RunningSession {
    running_sessions {
      name
      startDate
    }
  }
`

/**
 * __useRunningSessionQuery__
 *
 * To run a query within a React component, call `useRunningSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRunningSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRunningSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useRunningSessionQuery(
  baseOptions?: Apollo.QueryHookOptions<RunningSessionQuery, RunningSessionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<RunningSessionQuery, RunningSessionQueryVariables>(
    RunningSessionDocument,
    options,
  )
}
export function useRunningSessionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RunningSessionQuery, RunningSessionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<RunningSessionQuery, RunningSessionQueryVariables>(
    RunningSessionDocument,
    options,
  )
}
export type RunningSessionQueryHookResult = ReturnType<typeof useRunningSessionQuery>
export type RunningSessionLazyQueryHookResult = ReturnType<typeof useRunningSessionLazyQuery>
export type RunningSessionQueryResult = Apollo.QueryResult<
  RunningSessionQuery,
  RunningSessionQueryVariables
>
export const StartSessionDocument = gql`
  mutation startSession($input: running_sessions_insert_input!) {
    insert_running_sessions_one(object: $input) {
      id
      name
      startDate
    }
  }
`
export type StartSessionMutationFn = Apollo.MutationFunction<
  StartSessionMutation,
  StartSessionMutationVariables
>

/**
 * __useStartSessionMutation__
 *
 * To run a mutation, you first call `useStartSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startSessionMutation, { data, loading, error }] = useStartSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStartSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<StartSessionMutation, StartSessionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<StartSessionMutation, StartSessionMutationVariables>(
    StartSessionDocument,
    options,
  )
}
export type StartSessionMutationHookResult = ReturnType<typeof useStartSessionMutation>
export type StartSessionMutationResult = Apollo.MutationResult<StartSessionMutation>
export type StartSessionMutationOptions = Apollo.BaseMutationOptions<
  StartSessionMutation,
  StartSessionMutationVariables
>
