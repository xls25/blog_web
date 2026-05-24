
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model actions
 * 
 */
export type actions = $Result.DefaultSelection<Prisma.$actionsPayload>
/**
 * Model chat_members
 * 
 */
export type chat_members = $Result.DefaultSelection<Prisma.$chat_membersPayload>
/**
 * Model chats
 * 
 */
export type chats = $Result.DefaultSelection<Prisma.$chatsPayload>
/**
 * Model highlights
 * 
 */
export type highlights = $Result.DefaultSelection<Prisma.$highlightsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model stories
 * 
 */
export type stories = $Result.DefaultSelection<Prisma.$storiesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Actions
 * const actions = await prisma.actions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Actions
   * const actions = await prisma.actions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.actions`: Exposes CRUD operations for the **actions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.actions.findMany()
    * ```
    */
  get actions(): Prisma.actionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat_members`: Exposes CRUD operations for the **chat_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_members
    * const chat_members = await prisma.chat_members.findMany()
    * ```
    */
  get chat_members(): Prisma.chat_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chats`: Exposes CRUD operations for the **chats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chats.findMany()
    * ```
    */
  get chats(): Prisma.chatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlights`: Exposes CRUD operations for the **highlights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Highlights
    * const highlights = await prisma.highlights.findMany()
    * ```
    */
  get highlights(): Prisma.highlightsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stories`: Exposes CRUD operations for the **stories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.stories.findMany()
    * ```
    */
  get stories(): Prisma.storiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    actions: 'actions',
    chat_members: 'chat_members',
    chats: 'chats',
    highlights: 'highlights',
    messages: 'messages',
    stories: 'stories',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "actions" | "chat_members" | "chats" | "highlights" | "messages" | "stories" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      actions: {
        payload: Prisma.$actionsPayload<ExtArgs>
        fields: Prisma.actionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.actionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.actionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>
          }
          findFirst: {
            args: Prisma.actionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.actionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>
          }
          findMany: {
            args: Prisma.actionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>[]
          }
          create: {
            args: Prisma.actionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>
          }
          createMany: {
            args: Prisma.actionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.actionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>[]
          }
          delete: {
            args: Prisma.actionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>
          }
          update: {
            args: Prisma.actionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>
          }
          deleteMany: {
            args: Prisma.actionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.actionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.actionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>[]
          }
          upsert: {
            args: Prisma.actionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionsPayload>
          }
          aggregate: {
            args: Prisma.ActionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActions>
          }
          groupBy: {
            args: Prisma.actionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.actionsCountArgs<ExtArgs>
            result: $Utils.Optional<ActionsCountAggregateOutputType> | number
          }
        }
      }
      chat_members: {
        payload: Prisma.$chat_membersPayload<ExtArgs>
        fields: Prisma.chat_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          findFirst: {
            args: Prisma.chat_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          findMany: {
            args: Prisma.chat_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>[]
          }
          create: {
            args: Prisma.chat_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          createMany: {
            args: Prisma.chat_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chat_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>[]
          }
          delete: {
            args: Prisma.chat_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          update: {
            args: Prisma.chat_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          deleteMany: {
            args: Prisma.chat_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chat_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>[]
          }
          upsert: {
            args: Prisma.chat_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_membersPayload>
          }
          aggregate: {
            args: Prisma.Chat_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_members>
          }
          groupBy: {
            args: Prisma.chat_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_membersCountAggregateOutputType> | number
          }
        }
      }
      chats: {
        payload: Prisma.$chatsPayload<ExtArgs>
        fields: Prisma.chatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          findFirst: {
            args: Prisma.chatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          findMany: {
            args: Prisma.chatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>[]
          }
          create: {
            args: Prisma.chatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          createMany: {
            args: Prisma.chatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>[]
          }
          delete: {
            args: Prisma.chatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          update: {
            args: Prisma.chatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          deleteMany: {
            args: Prisma.chatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>[]
          }
          upsert: {
            args: Prisma.chatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsPayload>
          }
          aggregate: {
            args: Prisma.ChatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChats>
          }
          groupBy: {
            args: Prisma.chatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatsCountAggregateOutputType> | number
          }
        }
      }
      highlights: {
        payload: Prisma.$highlightsPayload<ExtArgs>
        fields: Prisma.highlightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.highlightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.highlightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>
          }
          findFirst: {
            args: Prisma.highlightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.highlightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>
          }
          findMany: {
            args: Prisma.highlightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>[]
          }
          create: {
            args: Prisma.highlightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>
          }
          createMany: {
            args: Prisma.highlightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.highlightsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>[]
          }
          delete: {
            args: Prisma.highlightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>
          }
          update: {
            args: Prisma.highlightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>
          }
          deleteMany: {
            args: Prisma.highlightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.highlightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.highlightsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>[]
          }
          upsert: {
            args: Prisma.highlightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$highlightsPayload>
          }
          aggregate: {
            args: Prisma.HighlightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlights>
          }
          groupBy: {
            args: Prisma.highlightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.highlightsCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      stories: {
        payload: Prisma.$storiesPayload<ExtArgs>
        fields: Prisma.storiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          findFirst: {
            args: Prisma.storiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          findMany: {
            args: Prisma.storiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>[]
          }
          create: {
            args: Prisma.storiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          createMany: {
            args: Prisma.storiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>[]
          }
          delete: {
            args: Prisma.storiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          update: {
            args: Prisma.storiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          deleteMany: {
            args: Prisma.storiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>[]
          }
          upsert: {
            args: Prisma.storiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          aggregate: {
            args: Prisma.StoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStories>
          }
          groupBy: {
            args: Prisma.storiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.storiesCountArgs<ExtArgs>
            result: $Utils.Optional<StoriesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    actions?: actionsOmit
    chat_members?: chat_membersOmit
    chats?: chatsOmit
    highlights?: highlightsOmit
    messages?: messagesOmit
    stories?: storiesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChatsCountOutputType
   */

  export type ChatsCountOutputType = {
    chat_members: number
    messages: number
  }

  export type ChatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_members?: boolean | ChatsCountOutputTypeCountChat_membersArgs
    messages?: boolean | ChatsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatsCountOutputType without action
   */
  export type ChatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatsCountOutputType
     */
    select?: ChatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatsCountOutputType without action
   */
  export type ChatsCountOutputTypeCountChat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_membersWhereInput
  }

  /**
   * ChatsCountOutputType without action
   */
  export type ChatsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    actions: number
    chat_members: number
    highlights: number
    messages: number
    stories: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | UsersCountOutputTypeCountActionsArgs
    chat_members?: boolean | UsersCountOutputTypeCountChat_membersArgs
    highlights?: boolean | UsersCountOutputTypeCountHighlightsArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    stories?: boolean | UsersCountOutputTypeCountStoriesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: highlightsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model actions
   */

  export type AggregateActions = {
    _count: ActionsCountAggregateOutputType | null
    _avg: ActionsAvgAggregateOutputType | null
    _sum: ActionsSumAggregateOutputType | null
    _min: ActionsMinAggregateOutputType | null
    _max: ActionsMaxAggregateOutputType | null
  }

  export type ActionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    score: number | null
  }

  export type ActionsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    score: bigint | null
  }

  export type ActionsMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    content: string | null
    created_at: Date | null
    expires_at: Date | null
    score: bigint | null
  }

  export type ActionsMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    content: string | null
    created_at: Date | null
    expires_at: Date | null
    score: bigint | null
  }

  export type ActionsCountAggregateOutputType = {
    id: number
    user_id: number
    content: number
    created_at: number
    expires_at: number
    score: number
    _all: number
  }


  export type ActionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    score?: true
  }

  export type ActionsSumAggregateInputType = {
    id?: true
    user_id?: true
    score?: true
  }

  export type ActionsMinAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    created_at?: true
    expires_at?: true
    score?: true
  }

  export type ActionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    created_at?: true
    expires_at?: true
    score?: true
  }

  export type ActionsCountAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    created_at?: true
    expires_at?: true
    score?: true
    _all?: true
  }

  export type ActionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actions to aggregate.
     */
    where?: actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions to fetch.
     */
    orderBy?: actionsOrderByWithRelationInput | actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actions
    **/
    _count?: true | ActionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionsMaxAggregateInputType
  }

  export type GetActionsAggregateType<T extends ActionsAggregateArgs> = {
        [P in keyof T & keyof AggregateActions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActions[P]>
      : GetScalarType<T[P], AggregateActions[P]>
  }




  export type actionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actionsWhereInput
    orderBy?: actionsOrderByWithAggregationInput | actionsOrderByWithAggregationInput[]
    by: ActionsScalarFieldEnum[] | ActionsScalarFieldEnum
    having?: actionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionsCountAggregateInputType | true
    _avg?: ActionsAvgAggregateInputType
    _sum?: ActionsSumAggregateInputType
    _min?: ActionsMinAggregateInputType
    _max?: ActionsMaxAggregateInputType
  }

  export type ActionsGroupByOutputType = {
    id: bigint
    user_id: bigint
    content: string
    created_at: Date
    expires_at: Date
    score: bigint
    _count: ActionsCountAggregateOutputType | null
    _avg: ActionsAvgAggregateOutputType | null
    _sum: ActionsSumAggregateOutputType | null
    _min: ActionsMinAggregateOutputType | null
    _max: ActionsMaxAggregateOutputType | null
  }

  type GetActionsGroupByPayload<T extends actionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionsGroupByOutputType[P]>
            : GetScalarType<T[P], ActionsGroupByOutputType[P]>
        }
      >
    >


  export type actionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    expires_at?: boolean
    score?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions"]>

  export type actionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    expires_at?: boolean
    score?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions"]>

  export type actionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    expires_at?: boolean
    score?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions"]>

  export type actionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    expires_at?: boolean
    score?: boolean
  }

  export type actionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "content" | "created_at" | "expires_at" | "score", ExtArgs["result"]["actions"]>
  export type actionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type actionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type actionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $actionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "actions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      content: string
      created_at: Date
      expires_at: Date
      score: bigint
    }, ExtArgs["result"]["actions"]>
    composites: {}
  }

  type actionsGetPayload<S extends boolean | null | undefined | actionsDefaultArgs> = $Result.GetResult<Prisma.$actionsPayload, S>

  type actionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<actionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionsCountAggregateInputType | true
    }

  export interface actionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['actions'], meta: { name: 'actions' } }
    /**
     * Find zero or one Actions that matches the filter.
     * @param {actionsFindUniqueArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actionsFindUniqueArgs>(args: SelectSubset<T, actionsFindUniqueArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actionsFindUniqueOrThrowArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actionsFindUniqueOrThrowArgs>(args: SelectSubset<T, actionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionsFindFirstArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actionsFindFirstArgs>(args?: SelectSubset<T, actionsFindFirstArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionsFindFirstOrThrowArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actionsFindFirstOrThrowArgs>(args?: SelectSubset<T, actionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.actions.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.actions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionsWithIdOnly = await prisma.actions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends actionsFindManyArgs>(args?: SelectSubset<T, actionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actions.
     * @param {actionsCreateArgs} args - Arguments to create a Actions.
     * @example
     * // Create one Actions
     * const Actions = await prisma.actions.create({
     *   data: {
     *     // ... data to create a Actions
     *   }
     * })
     * 
     */
    create<T extends actionsCreateArgs>(args: SelectSubset<T, actionsCreateArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {actionsCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const actions = await prisma.actions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends actionsCreateManyArgs>(args?: SelectSubset<T, actionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {actionsCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const actions = await prisma.actions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionsWithIdOnly = await prisma.actions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends actionsCreateManyAndReturnArgs>(args?: SelectSubset<T, actionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actions.
     * @param {actionsDeleteArgs} args - Arguments to delete one Actions.
     * @example
     * // Delete one Actions
     * const Actions = await prisma.actions.delete({
     *   where: {
     *     // ... filter to delete one Actions
     *   }
     * })
     * 
     */
    delete<T extends actionsDeleteArgs>(args: SelectSubset<T, actionsDeleteArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actions.
     * @param {actionsUpdateArgs} args - Arguments to update one Actions.
     * @example
     * // Update one Actions
     * const actions = await prisma.actions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends actionsUpdateArgs>(args: SelectSubset<T, actionsUpdateArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {actionsDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.actions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends actionsDeleteManyArgs>(args?: SelectSubset<T, actionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const actions = await prisma.actions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends actionsUpdateManyArgs>(args: SelectSubset<T, actionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {actionsUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const actions = await prisma.actions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionsWithIdOnly = await prisma.actions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends actionsUpdateManyAndReturnArgs>(args: SelectSubset<T, actionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actions.
     * @param {actionsUpsertArgs} args - Arguments to update or create a Actions.
     * @example
     * // Update or create a Actions
     * const actions = await prisma.actions.upsert({
     *   create: {
     *     // ... data to create a Actions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actions we want to update
     *   }
     * })
     */
    upsert<T extends actionsUpsertArgs>(args: SelectSubset<T, actionsUpsertArgs<ExtArgs>>): Prisma__actionsClient<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionsCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.actions.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends actionsCountArgs>(
      args?: Subset<T, actionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionsAggregateArgs>(args: Subset<T, ActionsAggregateArgs>): Prisma.PrismaPromise<GetActionsAggregateType<T>>

    /**
     * Group by Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends actionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: actionsGroupByArgs['orderBy'] }
        : { orderBy?: actionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, actionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the actions model
   */
  readonly fields: actionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for actions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__actionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the actions model
   */
  interface actionsFieldRefs {
    readonly id: FieldRef<"actions", 'BigInt'>
    readonly user_id: FieldRef<"actions", 'BigInt'>
    readonly content: FieldRef<"actions", 'String'>
    readonly created_at: FieldRef<"actions", 'DateTime'>
    readonly expires_at: FieldRef<"actions", 'DateTime'>
    readonly score: FieldRef<"actions", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * actions findUnique
   */
  export type actionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * Filter, which actions to fetch.
     */
    where: actionsWhereUniqueInput
  }

  /**
   * actions findUniqueOrThrow
   */
  export type actionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * Filter, which actions to fetch.
     */
    where: actionsWhereUniqueInput
  }

  /**
   * actions findFirst
   */
  export type actionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * Filter, which actions to fetch.
     */
    where?: actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions to fetch.
     */
    orderBy?: actionsOrderByWithRelationInput | actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actions.
     */
    cursor?: actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actions.
     */
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * actions findFirstOrThrow
   */
  export type actionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * Filter, which actions to fetch.
     */
    where?: actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions to fetch.
     */
    orderBy?: actionsOrderByWithRelationInput | actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actions.
     */
    cursor?: actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actions.
     */
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * actions findMany
   */
  export type actionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * Filter, which actions to fetch.
     */
    where?: actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions to fetch.
     */
    orderBy?: actionsOrderByWithRelationInput | actionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actions.
     */
    cursor?: actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actions.
     */
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * actions create
   */
  export type actionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * The data needed to create a actions.
     */
    data: XOR<actionsCreateInput, actionsUncheckedCreateInput>
  }

  /**
   * actions createMany
   */
  export type actionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many actions.
     */
    data: actionsCreateManyInput | actionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * actions createManyAndReturn
   */
  export type actionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * The data used to create many actions.
     */
    data: actionsCreateManyInput | actionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * actions update
   */
  export type actionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * The data needed to update a actions.
     */
    data: XOR<actionsUpdateInput, actionsUncheckedUpdateInput>
    /**
     * Choose, which actions to update.
     */
    where: actionsWhereUniqueInput
  }

  /**
   * actions updateMany
   */
  export type actionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update actions.
     */
    data: XOR<actionsUpdateManyMutationInput, actionsUncheckedUpdateManyInput>
    /**
     * Filter which actions to update
     */
    where?: actionsWhereInput
    /**
     * Limit how many actions to update.
     */
    limit?: number
  }

  /**
   * actions updateManyAndReturn
   */
  export type actionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * The data used to update actions.
     */
    data: XOR<actionsUpdateManyMutationInput, actionsUncheckedUpdateManyInput>
    /**
     * Filter which actions to update
     */
    where?: actionsWhereInput
    /**
     * Limit how many actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * actions upsert
   */
  export type actionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * The filter to search for the actions to update in case it exists.
     */
    where: actionsWhereUniqueInput
    /**
     * In case the actions found by the `where` argument doesn't exist, create a new actions with this data.
     */
    create: XOR<actionsCreateInput, actionsUncheckedCreateInput>
    /**
     * In case the actions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actionsUpdateInput, actionsUncheckedUpdateInput>
  }

  /**
   * actions delete
   */
  export type actionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    /**
     * Filter which actions to delete.
     */
    where: actionsWhereUniqueInput
  }

  /**
   * actions deleteMany
   */
  export type actionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actions to delete
     */
    where?: actionsWhereInput
    /**
     * Limit how many actions to delete.
     */
    limit?: number
  }

  /**
   * actions without action
   */
  export type actionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
  }


  /**
   * Model chat_members
   */

  export type AggregateChat_members = {
    _count: Chat_membersCountAggregateOutputType | null
    _avg: Chat_membersAvgAggregateOutputType | null
    _sum: Chat_membersSumAggregateOutputType | null
    _min: Chat_membersMinAggregateOutputType | null
    _max: Chat_membersMaxAggregateOutputType | null
  }

  export type Chat_membersAvgAggregateOutputType = {
    chat_id: number | null
    user_Id: number | null
  }

  export type Chat_membersSumAggregateOutputType = {
    chat_id: bigint | null
    user_Id: bigint | null
  }

  export type Chat_membersMinAggregateOutputType = {
    chat_id: bigint | null
    user_Id: bigint | null
  }

  export type Chat_membersMaxAggregateOutputType = {
    chat_id: bigint | null
    user_Id: bigint | null
  }

  export type Chat_membersCountAggregateOutputType = {
    chat_id: number
    user_Id: number
    _all: number
  }


  export type Chat_membersAvgAggregateInputType = {
    chat_id?: true
    user_Id?: true
  }

  export type Chat_membersSumAggregateInputType = {
    chat_id?: true
    user_Id?: true
  }

  export type Chat_membersMinAggregateInputType = {
    chat_id?: true
    user_Id?: true
  }

  export type Chat_membersMaxAggregateInputType = {
    chat_id?: true
    user_Id?: true
  }

  export type Chat_membersCountAggregateInputType = {
    chat_id?: true
    user_Id?: true
    _all?: true
  }

  export type Chat_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_members to aggregate.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_members
    **/
    _count?: true | Chat_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chat_membersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chat_membersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_membersMaxAggregateInputType
  }

  export type GetChat_membersAggregateType<T extends Chat_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_members[P]>
      : GetScalarType<T[P], AggregateChat_members[P]>
  }




  export type chat_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_membersWhereInput
    orderBy?: chat_membersOrderByWithAggregationInput | chat_membersOrderByWithAggregationInput[]
    by: Chat_membersScalarFieldEnum[] | Chat_membersScalarFieldEnum
    having?: chat_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_membersCountAggregateInputType | true
    _avg?: Chat_membersAvgAggregateInputType
    _sum?: Chat_membersSumAggregateInputType
    _min?: Chat_membersMinAggregateInputType
    _max?: Chat_membersMaxAggregateInputType
  }

  export type Chat_membersGroupByOutputType = {
    chat_id: bigint
    user_Id: bigint
    _count: Chat_membersCountAggregateOutputType | null
    _avg: Chat_membersAvgAggregateOutputType | null
    _sum: Chat_membersSumAggregateOutputType | null
    _min: Chat_membersMinAggregateOutputType | null
    _max: Chat_membersMaxAggregateOutputType | null
  }

  type GetChat_membersGroupByPayload<T extends chat_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_membersGroupByOutputType[P]>
        }
      >
    >


  export type chat_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chat_id?: boolean
    user_Id?: boolean
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_members"]>

  export type chat_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chat_id?: boolean
    user_Id?: boolean
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_members"]>

  export type chat_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chat_id?: boolean
    user_Id?: boolean
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_members"]>

  export type chat_membersSelectScalar = {
    chat_id?: boolean
    user_Id?: boolean
  }

  export type chat_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chat_id" | "user_Id", ExtArgs["result"]["chat_members"]>
  export type chat_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type chat_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type chat_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $chat_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_members"
    objects: {
      chats: Prisma.$chatsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      chat_id: bigint
      user_Id: bigint
    }, ExtArgs["result"]["chat_members"]>
    composites: {}
  }

  type chat_membersGetPayload<S extends boolean | null | undefined | chat_membersDefaultArgs> = $Result.GetResult<Prisma.$chat_membersPayload, S>

  type chat_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_membersCountAggregateInputType | true
    }

  export interface chat_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_members'], meta: { name: 'chat_members' } }
    /**
     * Find zero or one Chat_members that matches the filter.
     * @param {chat_membersFindUniqueArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_membersFindUniqueArgs>(args: SelectSubset<T, chat_membersFindUniqueArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_membersFindUniqueOrThrowArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersFindFirstArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_membersFindFirstArgs>(args?: SelectSubset<T, chat_membersFindFirstArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersFindFirstOrThrowArgs} args - Arguments to find a Chat_members
     * @example
     * // Get one Chat_members
     * const chat_members = await prisma.chat_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_members
     * const chat_members = await prisma.chat_members.findMany()
     * 
     * // Get first 10 Chat_members
     * const chat_members = await prisma.chat_members.findMany({ take: 10 })
     * 
     * // Only select the `chat_id`
     * const chat_membersWithChat_idOnly = await prisma.chat_members.findMany({ select: { chat_id: true } })
     * 
     */
    findMany<T extends chat_membersFindManyArgs>(args?: SelectSubset<T, chat_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_members.
     * @param {chat_membersCreateArgs} args - Arguments to create a Chat_members.
     * @example
     * // Create one Chat_members
     * const Chat_members = await prisma.chat_members.create({
     *   data: {
     *     // ... data to create a Chat_members
     *   }
     * })
     * 
     */
    create<T extends chat_membersCreateArgs>(args: SelectSubset<T, chat_membersCreateArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_members.
     * @param {chat_membersCreateManyArgs} args - Arguments to create many Chat_members.
     * @example
     * // Create many Chat_members
     * const chat_members = await prisma.chat_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_membersCreateManyArgs>(args?: SelectSubset<T, chat_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chat_members and returns the data saved in the database.
     * @param {chat_membersCreateManyAndReturnArgs} args - Arguments to create many Chat_members.
     * @example
     * // Create many Chat_members
     * const chat_members = await prisma.chat_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chat_members and only return the `chat_id`
     * const chat_membersWithChat_idOnly = await prisma.chat_members.createManyAndReturn({
     *   select: { chat_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chat_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, chat_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat_members.
     * @param {chat_membersDeleteArgs} args - Arguments to delete one Chat_members.
     * @example
     * // Delete one Chat_members
     * const Chat_members = await prisma.chat_members.delete({
     *   where: {
     *     // ... filter to delete one Chat_members
     *   }
     * })
     * 
     */
    delete<T extends chat_membersDeleteArgs>(args: SelectSubset<T, chat_membersDeleteArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_members.
     * @param {chat_membersUpdateArgs} args - Arguments to update one Chat_members.
     * @example
     * // Update one Chat_members
     * const chat_members = await prisma.chat_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_membersUpdateArgs>(args: SelectSubset<T, chat_membersUpdateArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_members.
     * @param {chat_membersDeleteManyArgs} args - Arguments to filter Chat_members to delete.
     * @example
     * // Delete a few Chat_members
     * const { count } = await prisma.chat_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_membersDeleteManyArgs>(args?: SelectSubset<T, chat_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_members
     * const chat_members = await prisma.chat_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_membersUpdateManyArgs>(args: SelectSubset<T, chat_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_members and returns the data updated in the database.
     * @param {chat_membersUpdateManyAndReturnArgs} args - Arguments to update many Chat_members.
     * @example
     * // Update many Chat_members
     * const chat_members = await prisma.chat_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chat_members and only return the `chat_id`
     * const chat_membersWithChat_idOnly = await prisma.chat_members.updateManyAndReturn({
     *   select: { chat_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chat_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, chat_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat_members.
     * @param {chat_membersUpsertArgs} args - Arguments to update or create a Chat_members.
     * @example
     * // Update or create a Chat_members
     * const chat_members = await prisma.chat_members.upsert({
     *   create: {
     *     // ... data to create a Chat_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_members we want to update
     *   }
     * })
     */
    upsert<T extends chat_membersUpsertArgs>(args: SelectSubset<T, chat_membersUpsertArgs<ExtArgs>>): Prisma__chat_membersClient<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersCountArgs} args - Arguments to filter Chat_members to count.
     * @example
     * // Count the number of Chat_members
     * const count = await prisma.chat_members.count({
     *   where: {
     *     // ... the filter for the Chat_members we want to count
     *   }
     * })
    **/
    count<T extends chat_membersCountArgs>(
      args?: Subset<T, chat_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chat_membersAggregateArgs>(args: Subset<T, Chat_membersAggregateArgs>): Prisma.PrismaPromise<GetChat_membersAggregateType<T>>

    /**
     * Group by Chat_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chat_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_membersGroupByArgs['orderBy'] }
        : { orderBy?: chat_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chat_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_members model
   */
  readonly fields: chat_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends chatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatsDefaultArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat_members model
   */
  interface chat_membersFieldRefs {
    readonly chat_id: FieldRef<"chat_members", 'BigInt'>
    readonly user_Id: FieldRef<"chat_members", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * chat_members findUnique
   */
  export type chat_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members findUniqueOrThrow
   */
  export type chat_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members findFirst
   */
  export type chat_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_members.
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_members.
     */
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chat_members findFirstOrThrow
   */
  export type chat_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_members.
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_members.
     */
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chat_members findMany
   */
  export type chat_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter, which chat_members to fetch.
     */
    where?: chat_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_members to fetch.
     */
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_members.
     */
    cursor?: chat_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_members.
     */
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chat_members create
   */
  export type chat_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_members.
     */
    data: XOR<chat_membersCreateInput, chat_membersUncheckedCreateInput>
  }

  /**
   * chat_members createMany
   */
  export type chat_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_members.
     */
    data: chat_membersCreateManyInput | chat_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_members createManyAndReturn
   */
  export type chat_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * The data used to create many chat_members.
     */
    data: chat_membersCreateManyInput | chat_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_members update
   */
  export type chat_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_members.
     */
    data: XOR<chat_membersUpdateInput, chat_membersUncheckedUpdateInput>
    /**
     * Choose, which chat_members to update.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members updateMany
   */
  export type chat_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_members.
     */
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyInput>
    /**
     * Filter which chat_members to update
     */
    where?: chat_membersWhereInput
    /**
     * Limit how many chat_members to update.
     */
    limit?: number
  }

  /**
   * chat_members updateManyAndReturn
   */
  export type chat_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * The data used to update chat_members.
     */
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyInput>
    /**
     * Filter which chat_members to update
     */
    where?: chat_membersWhereInput
    /**
     * Limit how many chat_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_members upsert
   */
  export type chat_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_members to update in case it exists.
     */
    where: chat_membersWhereUniqueInput
    /**
     * In case the chat_members found by the `where` argument doesn't exist, create a new chat_members with this data.
     */
    create: XOR<chat_membersCreateInput, chat_membersUncheckedCreateInput>
    /**
     * In case the chat_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_membersUpdateInput, chat_membersUncheckedUpdateInput>
  }

  /**
   * chat_members delete
   */
  export type chat_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    /**
     * Filter which chat_members to delete.
     */
    where: chat_membersWhereUniqueInput
  }

  /**
   * chat_members deleteMany
   */
  export type chat_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_members to delete
     */
    where?: chat_membersWhereInput
    /**
     * Limit how many chat_members to delete.
     */
    limit?: number
  }

  /**
   * chat_members without action
   */
  export type chat_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
  }


  /**
   * Model chats
   */

  export type AggregateChats = {
    _count: ChatsCountAggregateOutputType | null
    _avg: ChatsAvgAggregateOutputType | null
    _sum: ChatsSumAggregateOutputType | null
    _min: ChatsMinAggregateOutputType | null
    _max: ChatsMaxAggregateOutputType | null
  }

  export type ChatsAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatsSumAggregateOutputType = {
    id: bigint | null
  }

  export type ChatsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChatsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChatsCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChatsAvgAggregateInputType = {
    id?: true
  }

  export type ChatsSumAggregateInputType = {
    id?: true
  }

  export type ChatsMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
  }

  export type ChatsMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
  }

  export type ChatsCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to aggregate.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatsMaxAggregateInputType
  }

  export type GetChatsAggregateType<T extends ChatsAggregateArgs> = {
        [P in keyof T & keyof AggregateChats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChats[P]>
      : GetScalarType<T[P], AggregateChats[P]>
  }




  export type chatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatsWhereInput
    orderBy?: chatsOrderByWithAggregationInput | chatsOrderByWithAggregationInput[]
    by: ChatsScalarFieldEnum[] | ChatsScalarFieldEnum
    having?: chatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatsCountAggregateInputType | true
    _avg?: ChatsAvgAggregateInputType
    _sum?: ChatsSumAggregateInputType
    _min?: ChatsMinAggregateInputType
    _max?: ChatsMaxAggregateInputType
  }

  export type ChatsGroupByOutputType = {
    id: bigint
    created_at: Date
    updated_at: Date
    _count: ChatsCountAggregateOutputType | null
    _avg: ChatsAvgAggregateOutputType | null
    _sum: ChatsSumAggregateOutputType | null
    _min: ChatsMinAggregateOutputType | null
    _max: ChatsMaxAggregateOutputType | null
  }

  type GetChatsGroupByPayload<T extends chatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatsGroupByOutputType[P]>
        }
      >
    >


  export type chatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    chat_members?: boolean | chats$chat_membersArgs<ExtArgs>
    messages?: boolean | chats$messagesArgs<ExtArgs>
    _count?: boolean | ChatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chats"]>

  export type chatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["chats"]>

  export type chatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["chats"]>

  export type chatsSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type chatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at", ExtArgs["result"]["chats"]>
  export type chatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_members?: boolean | chats$chat_membersArgs<ExtArgs>
    messages?: boolean | chats$messagesArgs<ExtArgs>
    _count?: boolean | ChatsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type chatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $chatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chats"
    objects: {
      chat_members: Prisma.$chat_membersPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["chats"]>
    composites: {}
  }

  type chatsGetPayload<S extends boolean | null | undefined | chatsDefaultArgs> = $Result.GetResult<Prisma.$chatsPayload, S>

  type chatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatsCountAggregateInputType | true
    }

  export interface chatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chats'], meta: { name: 'chats' } }
    /**
     * Find zero or one Chats that matches the filter.
     * @param {chatsFindUniqueArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatsFindUniqueArgs>(args: SelectSubset<T, chatsFindUniqueArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatsFindUniqueOrThrowArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatsFindUniqueOrThrowArgs>(args: SelectSubset<T, chatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsFindFirstArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatsFindFirstArgs>(args?: SelectSubset<T, chatsFindFirstArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsFindFirstOrThrowArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatsFindFirstOrThrowArgs>(args?: SelectSubset<T, chatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chats.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatsWithIdOnly = await prisma.chats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatsFindManyArgs>(args?: SelectSubset<T, chatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chats.
     * @param {chatsCreateArgs} args - Arguments to create a Chats.
     * @example
     * // Create one Chats
     * const Chats = await prisma.chats.create({
     *   data: {
     *     // ... data to create a Chats
     *   }
     * })
     * 
     */
    create<T extends chatsCreateArgs>(args: SelectSubset<T, chatsCreateArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatsCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chats = await prisma.chats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatsCreateManyArgs>(args?: SelectSubset<T, chatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {chatsCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chats = await prisma.chats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatsWithIdOnly = await prisma.chats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatsCreateManyAndReturnArgs>(args?: SelectSubset<T, chatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chats.
     * @param {chatsDeleteArgs} args - Arguments to delete one Chats.
     * @example
     * // Delete one Chats
     * const Chats = await prisma.chats.delete({
     *   where: {
     *     // ... filter to delete one Chats
     *   }
     * })
     * 
     */
    delete<T extends chatsDeleteArgs>(args: SelectSubset<T, chatsDeleteArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chats.
     * @param {chatsUpdateArgs} args - Arguments to update one Chats.
     * @example
     * // Update one Chats
     * const chats = await prisma.chats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatsUpdateArgs>(args: SelectSubset<T, chatsUpdateArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatsDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatsDeleteManyArgs>(args?: SelectSubset<T, chatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chats = await prisma.chats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatsUpdateManyArgs>(args: SelectSubset<T, chatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {chatsUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chats = await prisma.chats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatsWithIdOnly = await prisma.chats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatsUpdateManyAndReturnArgs>(args: SelectSubset<T, chatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chats.
     * @param {chatsUpsertArgs} args - Arguments to update or create a Chats.
     * @example
     * // Update or create a Chats
     * const chats = await prisma.chats.upsert({
     *   create: {
     *     // ... data to create a Chats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chats we want to update
     *   }
     * })
     */
    upsert<T extends chatsUpsertArgs>(args: SelectSubset<T, chatsUpsertArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chats.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatsCountArgs>(
      args?: Subset<T, chatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatsAggregateArgs>(args: Subset<T, ChatsAggregateArgs>): Prisma.PrismaPromise<GetChatsAggregateType<T>>

    /**
     * Group by Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatsGroupByArgs['orderBy'] }
        : { orderBy?: chatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chats model
   */
  readonly fields: chatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_members<T extends chats$chat_membersArgs<ExtArgs> = {}>(args?: Subset<T, chats$chat_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends chats$messagesArgs<ExtArgs> = {}>(args?: Subset<T, chats$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chats model
   */
  interface chatsFieldRefs {
    readonly id: FieldRef<"chats", 'BigInt'>
    readonly created_at: FieldRef<"chats", 'DateTime'>
    readonly updated_at: FieldRef<"chats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chats findUnique
   */
  export type chatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats findUniqueOrThrow
   */
  export type chatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats findFirst
   */
  export type chatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * chats findFirstOrThrow
   */
  export type chatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * chats findMany
   */
  export type chatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatsOrderByWithRelationInput | chatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * chats create
   */
  export type chatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * The data needed to create a chats.
     */
    data: XOR<chatsCreateInput, chatsUncheckedCreateInput>
  }

  /**
   * chats createMany
   */
  export type chatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatsCreateManyInput | chatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chats createManyAndReturn
   */
  export type chatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * The data used to create many chats.
     */
    data: chatsCreateManyInput | chatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chats update
   */
  export type chatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * The data needed to update a chats.
     */
    data: XOR<chatsUpdateInput, chatsUncheckedUpdateInput>
    /**
     * Choose, which chats to update.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats updateMany
   */
  export type chatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatsUpdateManyMutationInput, chatsUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatsWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chats updateManyAndReturn
   */
  export type chatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * The data used to update chats.
     */
    data: XOR<chatsUpdateManyMutationInput, chatsUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatsWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chats upsert
   */
  export type chatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * The filter to search for the chats to update in case it exists.
     */
    where: chatsWhereUniqueInput
    /**
     * In case the chats found by the `where` argument doesn't exist, create a new chats with this data.
     */
    create: XOR<chatsCreateInput, chatsUncheckedCreateInput>
    /**
     * In case the chats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatsUpdateInput, chatsUncheckedUpdateInput>
  }

  /**
   * chats delete
   */
  export type chatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
    /**
     * Filter which chats to delete.
     */
    where: chatsWhereUniqueInput
  }

  /**
   * chats deleteMany
   */
  export type chatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatsWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chats.chat_members
   */
  export type chats$chat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    where?: chat_membersWhereInput
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    cursor?: chat_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * chats.messages
   */
  export type chats$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * chats without action
   */
  export type chatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chats
     */
    select?: chatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chats
     */
    omit?: chatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatsInclude<ExtArgs> | null
  }


  /**
   * Model highlights
   */

  export type AggregateHighlights = {
    _count: HighlightsCountAggregateOutputType | null
    _avg: HighlightsAvgAggregateOutputType | null
    _sum: HighlightsSumAggregateOutputType | null
    _min: HighlightsMinAggregateOutputType | null
    _max: HighlightsMaxAggregateOutputType | null
  }

  export type HighlightsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type HighlightsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type HighlightsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    content: string | null
    user_id: bigint | null
  }

  export type HighlightsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    content: string | null
    user_id: bigint | null
  }

  export type HighlightsCountAggregateOutputType = {
    id: number
    created_at: number
    content: number
    user_id: number
    _all: number
  }


  export type HighlightsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type HighlightsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type HighlightsMinAggregateInputType = {
    id?: true
    created_at?: true
    content?: true
    user_id?: true
  }

  export type HighlightsMaxAggregateInputType = {
    id?: true
    created_at?: true
    content?: true
    user_id?: true
  }

  export type HighlightsCountAggregateInputType = {
    id?: true
    created_at?: true
    content?: true
    user_id?: true
    _all?: true
  }

  export type HighlightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which highlights to aggregate.
     */
    where?: highlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of highlights to fetch.
     */
    orderBy?: highlightsOrderByWithRelationInput | highlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: highlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned highlights
    **/
    _count?: true | HighlightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HighlightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HighlightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightsMaxAggregateInputType
  }

  export type GetHighlightsAggregateType<T extends HighlightsAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlights[P]>
      : GetScalarType<T[P], AggregateHighlights[P]>
  }




  export type highlightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: highlightsWhereInput
    orderBy?: highlightsOrderByWithAggregationInput | highlightsOrderByWithAggregationInput[]
    by: HighlightsScalarFieldEnum[] | HighlightsScalarFieldEnum
    having?: highlightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightsCountAggregateInputType | true
    _avg?: HighlightsAvgAggregateInputType
    _sum?: HighlightsSumAggregateInputType
    _min?: HighlightsMinAggregateInputType
    _max?: HighlightsMaxAggregateInputType
  }

  export type HighlightsGroupByOutputType = {
    id: bigint
    created_at: Date
    content: string
    user_id: bigint
    _count: HighlightsCountAggregateOutputType | null
    _avg: HighlightsAvgAggregateOutputType | null
    _sum: HighlightsSumAggregateOutputType | null
    _min: HighlightsMinAggregateOutputType | null
    _max: HighlightsMaxAggregateOutputType | null
  }

  type GetHighlightsGroupByPayload<T extends highlightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightsGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightsGroupByOutputType[P]>
        }
      >
    >


  export type highlightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    content?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlights"]>

  export type highlightsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    content?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlights"]>

  export type highlightsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    content?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlights"]>

  export type highlightsSelectScalar = {
    id?: boolean
    created_at?: boolean
    content?: boolean
    user_id?: boolean
  }

  export type highlightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "content" | "user_id", ExtArgs["result"]["highlights"]>
  export type highlightsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type highlightsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type highlightsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $highlightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "highlights"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      content: string
      user_id: bigint
    }, ExtArgs["result"]["highlights"]>
    composites: {}
  }

  type highlightsGetPayload<S extends boolean | null | undefined | highlightsDefaultArgs> = $Result.GetResult<Prisma.$highlightsPayload, S>

  type highlightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<highlightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightsCountAggregateInputType | true
    }

  export interface highlightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['highlights'], meta: { name: 'highlights' } }
    /**
     * Find zero or one Highlights that matches the filter.
     * @param {highlightsFindUniqueArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends highlightsFindUniqueArgs>(args: SelectSubset<T, highlightsFindUniqueArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Highlights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {highlightsFindUniqueOrThrowArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends highlightsFindUniqueOrThrowArgs>(args: SelectSubset<T, highlightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {highlightsFindFirstArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends highlightsFindFirstArgs>(args?: SelectSubset<T, highlightsFindFirstArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {highlightsFindFirstOrThrowArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends highlightsFindFirstOrThrowArgs>(args?: SelectSubset<T, highlightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {highlightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Highlights
     * const highlights = await prisma.highlights.findMany()
     * 
     * // Get first 10 Highlights
     * const highlights = await prisma.highlights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightsWithIdOnly = await prisma.highlights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends highlightsFindManyArgs>(args?: SelectSubset<T, highlightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Highlights.
     * @param {highlightsCreateArgs} args - Arguments to create a Highlights.
     * @example
     * // Create one Highlights
     * const Highlights = await prisma.highlights.create({
     *   data: {
     *     // ... data to create a Highlights
     *   }
     * })
     * 
     */
    create<T extends highlightsCreateArgs>(args: SelectSubset<T, highlightsCreateArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Highlights.
     * @param {highlightsCreateManyArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlights = await prisma.highlights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends highlightsCreateManyArgs>(args?: SelectSubset<T, highlightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Highlights and returns the data saved in the database.
     * @param {highlightsCreateManyAndReturnArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlights = await prisma.highlights.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Highlights and only return the `id`
     * const highlightsWithIdOnly = await prisma.highlights.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends highlightsCreateManyAndReturnArgs>(args?: SelectSubset<T, highlightsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Highlights.
     * @param {highlightsDeleteArgs} args - Arguments to delete one Highlights.
     * @example
     * // Delete one Highlights
     * const Highlights = await prisma.highlights.delete({
     *   where: {
     *     // ... filter to delete one Highlights
     *   }
     * })
     * 
     */
    delete<T extends highlightsDeleteArgs>(args: SelectSubset<T, highlightsDeleteArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Highlights.
     * @param {highlightsUpdateArgs} args - Arguments to update one Highlights.
     * @example
     * // Update one Highlights
     * const highlights = await prisma.highlights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends highlightsUpdateArgs>(args: SelectSubset<T, highlightsUpdateArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Highlights.
     * @param {highlightsDeleteManyArgs} args - Arguments to filter Highlights to delete.
     * @example
     * // Delete a few Highlights
     * const { count } = await prisma.highlights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends highlightsDeleteManyArgs>(args?: SelectSubset<T, highlightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {highlightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Highlights
     * const highlights = await prisma.highlights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends highlightsUpdateManyArgs>(args: SelectSubset<T, highlightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights and returns the data updated in the database.
     * @param {highlightsUpdateManyAndReturnArgs} args - Arguments to update many Highlights.
     * @example
     * // Update many Highlights
     * const highlights = await prisma.highlights.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Highlights and only return the `id`
     * const highlightsWithIdOnly = await prisma.highlights.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends highlightsUpdateManyAndReturnArgs>(args: SelectSubset<T, highlightsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Highlights.
     * @param {highlightsUpsertArgs} args - Arguments to update or create a Highlights.
     * @example
     * // Update or create a Highlights
     * const highlights = await prisma.highlights.upsert({
     *   create: {
     *     // ... data to create a Highlights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Highlights we want to update
     *   }
     * })
     */
    upsert<T extends highlightsUpsertArgs>(args: SelectSubset<T, highlightsUpsertArgs<ExtArgs>>): Prisma__highlightsClient<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {highlightsCountArgs} args - Arguments to filter Highlights to count.
     * @example
     * // Count the number of Highlights
     * const count = await prisma.highlights.count({
     *   where: {
     *     // ... the filter for the Highlights we want to count
     *   }
     * })
    **/
    count<T extends highlightsCountArgs>(
      args?: Subset<T, highlightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HighlightsAggregateArgs>(args: Subset<T, HighlightsAggregateArgs>): Prisma.PrismaPromise<GetHighlightsAggregateType<T>>

    /**
     * Group by Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {highlightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends highlightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: highlightsGroupByArgs['orderBy'] }
        : { orderBy?: highlightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, highlightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the highlights model
   */
  readonly fields: highlightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for highlights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__highlightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the highlights model
   */
  interface highlightsFieldRefs {
    readonly id: FieldRef<"highlights", 'BigInt'>
    readonly created_at: FieldRef<"highlights", 'DateTime'>
    readonly content: FieldRef<"highlights", 'String'>
    readonly user_id: FieldRef<"highlights", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * highlights findUnique
   */
  export type highlightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * Filter, which highlights to fetch.
     */
    where: highlightsWhereUniqueInput
  }

  /**
   * highlights findUniqueOrThrow
   */
  export type highlightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * Filter, which highlights to fetch.
     */
    where: highlightsWhereUniqueInput
  }

  /**
   * highlights findFirst
   */
  export type highlightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * Filter, which highlights to fetch.
     */
    where?: highlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of highlights to fetch.
     */
    orderBy?: highlightsOrderByWithRelationInput | highlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for highlights.
     */
    cursor?: highlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of highlights.
     */
    distinct?: HighlightsScalarFieldEnum | HighlightsScalarFieldEnum[]
  }

  /**
   * highlights findFirstOrThrow
   */
  export type highlightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * Filter, which highlights to fetch.
     */
    where?: highlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of highlights to fetch.
     */
    orderBy?: highlightsOrderByWithRelationInput | highlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for highlights.
     */
    cursor?: highlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of highlights.
     */
    distinct?: HighlightsScalarFieldEnum | HighlightsScalarFieldEnum[]
  }

  /**
   * highlights findMany
   */
  export type highlightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * Filter, which highlights to fetch.
     */
    where?: highlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of highlights to fetch.
     */
    orderBy?: highlightsOrderByWithRelationInput | highlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing highlights.
     */
    cursor?: highlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of highlights.
     */
    distinct?: HighlightsScalarFieldEnum | HighlightsScalarFieldEnum[]
  }

  /**
   * highlights create
   */
  export type highlightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * The data needed to create a highlights.
     */
    data: XOR<highlightsCreateInput, highlightsUncheckedCreateInput>
  }

  /**
   * highlights createMany
   */
  export type highlightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many highlights.
     */
    data: highlightsCreateManyInput | highlightsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * highlights createManyAndReturn
   */
  export type highlightsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * The data used to create many highlights.
     */
    data: highlightsCreateManyInput | highlightsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * highlights update
   */
  export type highlightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * The data needed to update a highlights.
     */
    data: XOR<highlightsUpdateInput, highlightsUncheckedUpdateInput>
    /**
     * Choose, which highlights to update.
     */
    where: highlightsWhereUniqueInput
  }

  /**
   * highlights updateMany
   */
  export type highlightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update highlights.
     */
    data: XOR<highlightsUpdateManyMutationInput, highlightsUncheckedUpdateManyInput>
    /**
     * Filter which highlights to update
     */
    where?: highlightsWhereInput
    /**
     * Limit how many highlights to update.
     */
    limit?: number
  }

  /**
   * highlights updateManyAndReturn
   */
  export type highlightsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * The data used to update highlights.
     */
    data: XOR<highlightsUpdateManyMutationInput, highlightsUncheckedUpdateManyInput>
    /**
     * Filter which highlights to update
     */
    where?: highlightsWhereInput
    /**
     * Limit how many highlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * highlights upsert
   */
  export type highlightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * The filter to search for the highlights to update in case it exists.
     */
    where: highlightsWhereUniqueInput
    /**
     * In case the highlights found by the `where` argument doesn't exist, create a new highlights with this data.
     */
    create: XOR<highlightsCreateInput, highlightsUncheckedCreateInput>
    /**
     * In case the highlights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<highlightsUpdateInput, highlightsUncheckedUpdateInput>
  }

  /**
   * highlights delete
   */
  export type highlightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    /**
     * Filter which highlights to delete.
     */
    where: highlightsWhereUniqueInput
  }

  /**
   * highlights deleteMany
   */
  export type highlightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which highlights to delete
     */
    where?: highlightsWhereInput
    /**
     * Limit how many highlights to delete.
     */
    limit?: number
  }

  /**
   * highlights without action
   */
  export type highlightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    chat_id: number | null
    sender_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: bigint | null
    chat_id: bigint | null
    sender_id: bigint | null
  }

  export type MessagesMinAggregateOutputType = {
    id: bigint | null
    chat_id: bigint | null
    sender_id: bigint | null
    content: string | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: bigint | null
    chat_id: bigint | null
    sender_id: bigint | null
    content: string | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    chat_id: number
    sender_id: number
    content: number
    created_at: number
    is_read: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
    content?: true
    created_at?: true
    is_read?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
    content?: true
    created_at?: true
    is_read?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    chat_id?: true
    sender_id?: true
    content?: true
    created_at?: true
    is_read?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: bigint
    chat_id: bigint
    sender_id: bigint
    content: string
    created_at: Date
    is_read: boolean
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    created_at?: boolean
    is_read?: boolean
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    created_at?: boolean
    is_read?: boolean
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    created_at?: boolean
    is_read?: boolean
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    chat_id?: boolean
    sender_id?: boolean
    content?: boolean
    created_at?: boolean
    is_read?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chat_id" | "sender_id" | "content" | "created_at" | "is_read", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | chatsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      chats: Prisma.$chatsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chat_id: bigint
      sender_id: bigint
      content: string
      created_at: Date
      is_read: boolean
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends chatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatsDefaultArgs<ExtArgs>>): Prisma__chatsClient<$Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'BigInt'>
    readonly chat_id: FieldRef<"messages", 'BigInt'>
    readonly sender_id: FieldRef<"messages", 'BigInt'>
    readonly content: FieldRef<"messages", 'String'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
    readonly is_read: FieldRef<"messages", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model stories
   */

  export type AggregateStories = {
    _count: StoriesCountAggregateOutputType | null
    _avg: StoriesAvgAggregateOutputType | null
    _sum: StoriesSumAggregateOutputType | null
    _min: StoriesMinAggregateOutputType | null
    _max: StoriesMaxAggregateOutputType | null
  }

  export type StoriesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type StoriesSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type StoriesMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    created_at: Date | null
    content: string | null
    expires_at: Date | null
  }

  export type StoriesMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    created_at: Date | null
    content: string | null
    expires_at: Date | null
  }

  export type StoriesCountAggregateOutputType = {
    id: number
    user_id: number
    created_at: number
    content: number
    expires_at: number
    _all: number
  }


  export type StoriesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type StoriesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type StoriesMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    content?: true
    expires_at?: true
  }

  export type StoriesMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    content?: true
    expires_at?: true
  }

  export type StoriesCountAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    content?: true
    expires_at?: true
    _all?: true
  }

  export type StoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stories to aggregate.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stories
    **/
    _count?: true | StoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoriesMaxAggregateInputType
  }

  export type GetStoriesAggregateType<T extends StoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateStories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStories[P]>
      : GetScalarType<T[P], AggregateStories[P]>
  }




  export type storiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storiesWhereInput
    orderBy?: storiesOrderByWithAggregationInput | storiesOrderByWithAggregationInput[]
    by: StoriesScalarFieldEnum[] | StoriesScalarFieldEnum
    having?: storiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoriesCountAggregateInputType | true
    _avg?: StoriesAvgAggregateInputType
    _sum?: StoriesSumAggregateInputType
    _min?: StoriesMinAggregateInputType
    _max?: StoriesMaxAggregateInputType
  }

  export type StoriesGroupByOutputType = {
    id: bigint
    user_id: bigint
    created_at: Date
    content: string
    expires_at: Date
    _count: StoriesCountAggregateOutputType | null
    _avg: StoriesAvgAggregateOutputType | null
    _sum: StoriesSumAggregateOutputType | null
    _min: StoriesMinAggregateOutputType | null
    _max: StoriesMaxAggregateOutputType | null
  }

  type GetStoriesGroupByPayload<T extends storiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoriesGroupByOutputType[P]>
            : GetScalarType<T[P], StoriesGroupByOutputType[P]>
        }
      >
    >


  export type storiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stories"]>

  export type storiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stories"]>

  export type storiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
    expires_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stories"]>

  export type storiesSelectScalar = {
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    content?: boolean
    expires_at?: boolean
  }

  export type storiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "created_at" | "content" | "expires_at", ExtArgs["result"]["stories"]>
  export type storiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type storiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type storiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $storiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stories"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      created_at: Date
      content: string
      expires_at: Date
    }, ExtArgs["result"]["stories"]>
    composites: {}
  }

  type storiesGetPayload<S extends boolean | null | undefined | storiesDefaultArgs> = $Result.GetResult<Prisma.$storiesPayload, S>

  type storiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoriesCountAggregateInputType | true
    }

  export interface storiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stories'], meta: { name: 'stories' } }
    /**
     * Find zero or one Stories that matches the filter.
     * @param {storiesFindUniqueArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storiesFindUniqueArgs>(args: SelectSubset<T, storiesFindUniqueArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storiesFindUniqueOrThrowArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storiesFindUniqueOrThrowArgs>(args: SelectSubset<T, storiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesFindFirstArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storiesFindFirstArgs>(args?: SelectSubset<T, storiesFindFirstArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesFindFirstOrThrowArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storiesFindFirstOrThrowArgs>(args?: SelectSubset<T, storiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.stories.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.stories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storiesWithIdOnly = await prisma.stories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storiesFindManyArgs>(args?: SelectSubset<T, storiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stories.
     * @param {storiesCreateArgs} args - Arguments to create a Stories.
     * @example
     * // Create one Stories
     * const Stories = await prisma.stories.create({
     *   data: {
     *     // ... data to create a Stories
     *   }
     * })
     * 
     */
    create<T extends storiesCreateArgs>(args: SelectSubset<T, storiesCreateArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {storiesCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const stories = await prisma.stories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storiesCreateManyArgs>(args?: SelectSubset<T, storiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {storiesCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const stories = await prisma.stories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storiesWithIdOnly = await prisma.stories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storiesCreateManyAndReturnArgs>(args?: SelectSubset<T, storiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stories.
     * @param {storiesDeleteArgs} args - Arguments to delete one Stories.
     * @example
     * // Delete one Stories
     * const Stories = await prisma.stories.delete({
     *   where: {
     *     // ... filter to delete one Stories
     *   }
     * })
     * 
     */
    delete<T extends storiesDeleteArgs>(args: SelectSubset<T, storiesDeleteArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stories.
     * @param {storiesUpdateArgs} args - Arguments to update one Stories.
     * @example
     * // Update one Stories
     * const stories = await prisma.stories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storiesUpdateArgs>(args: SelectSubset<T, storiesUpdateArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {storiesDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.stories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storiesDeleteManyArgs>(args?: SelectSubset<T, storiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const stories = await prisma.stories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storiesUpdateManyArgs>(args: SelectSubset<T, storiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {storiesUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const stories = await prisma.stories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storiesWithIdOnly = await prisma.stories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends storiesUpdateManyAndReturnArgs>(args: SelectSubset<T, storiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stories.
     * @param {storiesUpsertArgs} args - Arguments to update or create a Stories.
     * @example
     * // Update or create a Stories
     * const stories = await prisma.stories.upsert({
     *   create: {
     *     // ... data to create a Stories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stories we want to update
     *   }
     * })
     */
    upsert<T extends storiesUpsertArgs>(args: SelectSubset<T, storiesUpsertArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.stories.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends storiesCountArgs>(
      args?: Subset<T, storiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoriesAggregateArgs>(args: Subset<T, StoriesAggregateArgs>): Prisma.PrismaPromise<GetStoriesAggregateType<T>>

    /**
     * Group by Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storiesGroupByArgs['orderBy'] }
        : { orderBy?: storiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stories model
   */
  readonly fields: storiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stories model
   */
  interface storiesFieldRefs {
    readonly id: FieldRef<"stories", 'BigInt'>
    readonly user_id: FieldRef<"stories", 'BigInt'>
    readonly created_at: FieldRef<"stories", 'DateTime'>
    readonly content: FieldRef<"stories", 'String'>
    readonly expires_at: FieldRef<"stories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stories findUnique
   */
  export type storiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories findUniqueOrThrow
   */
  export type storiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories findFirst
   */
  export type storiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * stories findFirstOrThrow
   */
  export type storiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * stories findMany
   */
  export type storiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stories.
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * stories create
   */
  export type storiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * The data needed to create a stories.
     */
    data: XOR<storiesCreateInput, storiesUncheckedCreateInput>
  }

  /**
   * stories createMany
   */
  export type storiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stories.
     */
    data: storiesCreateManyInput | storiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stories createManyAndReturn
   */
  export type storiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * The data used to create many stories.
     */
    data: storiesCreateManyInput | storiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stories update
   */
  export type storiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * The data needed to update a stories.
     */
    data: XOR<storiesUpdateInput, storiesUncheckedUpdateInput>
    /**
     * Choose, which stories to update.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories updateMany
   */
  export type storiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stories.
     */
    data: XOR<storiesUpdateManyMutationInput, storiesUncheckedUpdateManyInput>
    /**
     * Filter which stories to update
     */
    where?: storiesWhereInput
    /**
     * Limit how many stories to update.
     */
    limit?: number
  }

  /**
   * stories updateManyAndReturn
   */
  export type storiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * The data used to update stories.
     */
    data: XOR<storiesUpdateManyMutationInput, storiesUncheckedUpdateManyInput>
    /**
     * Filter which stories to update
     */
    where?: storiesWhereInput
    /**
     * Limit how many stories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stories upsert
   */
  export type storiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * The filter to search for the stories to update in case it exists.
     */
    where: storiesWhereUniqueInput
    /**
     * In case the stories found by the `where` argument doesn't exist, create a new stories with this data.
     */
    create: XOR<storiesCreateInput, storiesUncheckedCreateInput>
    /**
     * In case the stories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storiesUpdateInput, storiesUncheckedUpdateInput>
  }

  /**
   * stories delete
   */
  export type storiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter which stories to delete.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories deleteMany
   */
  export type storiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stories to delete
     */
    where?: storiesWhereInput
    /**
     * Limit how many stories to delete.
     */
    limit?: number
  }

  /**
   * stories without action
   */
  export type storiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    prestige_point: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
    prestige_point: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    birth_date: Date | null
    password: string | null
    is_admin: boolean | null
    description: string | null
    prestige_point: bigint | null
    email: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    birth_date: Date | null
    password: string | null
    is_admin: boolean | null
    description: string | null
    prestige_point: bigint | null
    email: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    birth_date: number
    password: number
    is_admin: number
    description: number
    prestige_point: number
    email: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    prestige_point?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    prestige_point?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    birth_date?: true
    password?: true
    is_admin?: true
    description?: true
    prestige_point?: true
    email?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    birth_date?: true
    password?: true
    is_admin?: true
    description?: true
    prestige_point?: true
    email?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    birth_date?: true
    password?: true
    is_admin?: true
    description?: true
    prestige_point?: true
    email?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    username: string
    birth_date: Date
    password: string
    is_admin: boolean
    description: string | null
    prestige_point: bigint
    email: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    birth_date?: boolean
    password?: boolean
    is_admin?: boolean
    description?: boolean
    prestige_point?: boolean
    email?: boolean
    actions?: boolean | users$actionsArgs<ExtArgs>
    chat_members?: boolean | users$chat_membersArgs<ExtArgs>
    highlights?: boolean | users$highlightsArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    stories?: boolean | users$storiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    birth_date?: boolean
    password?: boolean
    is_admin?: boolean
    description?: boolean
    prestige_point?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    birth_date?: boolean
    password?: boolean
    is_admin?: boolean
    description?: boolean
    prestige_point?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    birth_date?: boolean
    password?: boolean
    is_admin?: boolean
    description?: boolean
    prestige_point?: boolean
    email?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "birth_date" | "password" | "is_admin" | "description" | "prestige_point" | "email", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | users$actionsArgs<ExtArgs>
    chat_members?: boolean | users$chat_membersArgs<ExtArgs>
    highlights?: boolean | users$highlightsArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    stories?: boolean | users$storiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      actions: Prisma.$actionsPayload<ExtArgs>[]
      chat_members: Prisma.$chat_membersPayload<ExtArgs>[]
      highlights: Prisma.$highlightsPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      stories: Prisma.$storiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      username: string
      birth_date: Date
      password: string
      is_admin: boolean
      description: string | null
      prestige_point: bigint
      email: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends users$actionsArgs<ExtArgs> = {}>(args?: Subset<T, users$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat_members<T extends users$chat_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$chat_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends users$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, users$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$highlightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stories<T extends users$storiesArgs<ExtArgs> = {}>(args?: Subset<T, users$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly username: FieldRef<"users", 'String'>
    readonly birth_date: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
    readonly is_admin: FieldRef<"users", 'Boolean'>
    readonly description: FieldRef<"users", 'String'>
    readonly prestige_point: FieldRef<"users", 'BigInt'>
    readonly email: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.actions
   */
  export type users$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions
     */
    select?: actionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions
     */
    omit?: actionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionsInclude<ExtArgs> | null
    where?: actionsWhereInput
    orderBy?: actionsOrderByWithRelationInput | actionsOrderByWithRelationInput[]
    cursor?: actionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * users.chat_members
   */
  export type users$chat_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_members
     */
    select?: chat_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_members
     */
    omit?: chat_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_membersInclude<ExtArgs> | null
    where?: chat_membersWhereInput
    orderBy?: chat_membersOrderByWithRelationInput | chat_membersOrderByWithRelationInput[]
    cursor?: chat_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_membersScalarFieldEnum | Chat_membersScalarFieldEnum[]
  }

  /**
   * users.highlights
   */
  export type users$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the highlights
     */
    select?: highlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the highlights
     */
    omit?: highlightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: highlightsInclude<ExtArgs> | null
    where?: highlightsWhereInput
    orderBy?: highlightsOrderByWithRelationInput | highlightsOrderByWithRelationInput[]
    cursor?: highlightsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightsScalarFieldEnum | HighlightsScalarFieldEnum[]
  }

  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.stories
   */
  export type users$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    where?: storiesWhereInput
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    cursor?: storiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ActionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    content: 'content',
    created_at: 'created_at',
    expires_at: 'expires_at',
    score: 'score'
  };

  export type ActionsScalarFieldEnum = (typeof ActionsScalarFieldEnum)[keyof typeof ActionsScalarFieldEnum]


  export const Chat_membersScalarFieldEnum: {
    chat_id: 'chat_id',
    user_Id: 'user_Id'
  };

  export type Chat_membersScalarFieldEnum = (typeof Chat_membersScalarFieldEnum)[keyof typeof Chat_membersScalarFieldEnum]


  export const ChatsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChatsScalarFieldEnum = (typeof ChatsScalarFieldEnum)[keyof typeof ChatsScalarFieldEnum]


  export const HighlightsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    content: 'content',
    user_id: 'user_id'
  };

  export type HighlightsScalarFieldEnum = (typeof HighlightsScalarFieldEnum)[keyof typeof HighlightsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    chat_id: 'chat_id',
    sender_id: 'sender_id',
    content: 'content',
    created_at: 'created_at',
    is_read: 'is_read'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const StoriesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at',
    content: 'content',
    expires_at: 'expires_at'
  };

  export type StoriesScalarFieldEnum = (typeof StoriesScalarFieldEnum)[keyof typeof StoriesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    birth_date: 'birth_date',
    password: 'password',
    is_admin: 'is_admin',
    description: 'description',
    prestige_point: 'prestige_point',
    email: 'email'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type actionsWhereInput = {
    AND?: actionsWhereInput | actionsWhereInput[]
    OR?: actionsWhereInput[]
    NOT?: actionsWhereInput | actionsWhereInput[]
    id?: BigIntFilter<"actions"> | bigint | number
    user_id?: BigIntFilter<"actions"> | bigint | number
    content?: StringFilter<"actions"> | string
    created_at?: DateTimeFilter<"actions"> | Date | string
    expires_at?: DateTimeFilter<"actions"> | Date | string
    score?: BigIntFilter<"actions"> | bigint | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type actionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    score?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type actionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: actionsWhereInput | actionsWhereInput[]
    OR?: actionsWhereInput[]
    NOT?: actionsWhereInput | actionsWhereInput[]
    user_id?: BigIntFilter<"actions"> | bigint | number
    content?: StringFilter<"actions"> | string
    created_at?: DateTimeFilter<"actions"> | Date | string
    expires_at?: DateTimeFilter<"actions"> | Date | string
    score?: BigIntFilter<"actions"> | bigint | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type actionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    score?: SortOrder
    _count?: actionsCountOrderByAggregateInput
    _avg?: actionsAvgOrderByAggregateInput
    _max?: actionsMaxOrderByAggregateInput
    _min?: actionsMinOrderByAggregateInput
    _sum?: actionsSumOrderByAggregateInput
  }

  export type actionsScalarWhereWithAggregatesInput = {
    AND?: actionsScalarWhereWithAggregatesInput | actionsScalarWhereWithAggregatesInput[]
    OR?: actionsScalarWhereWithAggregatesInput[]
    NOT?: actionsScalarWhereWithAggregatesInput | actionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"actions"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"actions"> | bigint | number
    content?: StringWithAggregatesFilter<"actions"> | string
    created_at?: DateTimeWithAggregatesFilter<"actions"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"actions"> | Date | string
    score?: BigIntWithAggregatesFilter<"actions"> | bigint | number
  }

  export type chat_membersWhereInput = {
    AND?: chat_membersWhereInput | chat_membersWhereInput[]
    OR?: chat_membersWhereInput[]
    NOT?: chat_membersWhereInput | chat_membersWhereInput[]
    chat_id?: BigIntFilter<"chat_members"> | bigint | number
    user_Id?: BigIntFilter<"chat_members"> | bigint | number
    chats?: XOR<ChatsScalarRelationFilter, chatsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type chat_membersOrderByWithRelationInput = {
    chat_id?: SortOrder
    user_Id?: SortOrder
    chats?: chatsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type chat_membersWhereUniqueInput = Prisma.AtLeast<{
    chat_id_user_Id?: chat_membersChat_idUser_IdCompoundUniqueInput
    AND?: chat_membersWhereInput | chat_membersWhereInput[]
    OR?: chat_membersWhereInput[]
    NOT?: chat_membersWhereInput | chat_membersWhereInput[]
    chat_id?: BigIntFilter<"chat_members"> | bigint | number
    user_Id?: BigIntFilter<"chat_members"> | bigint | number
    chats?: XOR<ChatsScalarRelationFilter, chatsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "chat_id_user_Id">

  export type chat_membersOrderByWithAggregationInput = {
    chat_id?: SortOrder
    user_Id?: SortOrder
    _count?: chat_membersCountOrderByAggregateInput
    _avg?: chat_membersAvgOrderByAggregateInput
    _max?: chat_membersMaxOrderByAggregateInput
    _min?: chat_membersMinOrderByAggregateInput
    _sum?: chat_membersSumOrderByAggregateInput
  }

  export type chat_membersScalarWhereWithAggregatesInput = {
    AND?: chat_membersScalarWhereWithAggregatesInput | chat_membersScalarWhereWithAggregatesInput[]
    OR?: chat_membersScalarWhereWithAggregatesInput[]
    NOT?: chat_membersScalarWhereWithAggregatesInput | chat_membersScalarWhereWithAggregatesInput[]
    chat_id?: BigIntWithAggregatesFilter<"chat_members"> | bigint | number
    user_Id?: BigIntWithAggregatesFilter<"chat_members"> | bigint | number
  }

  export type chatsWhereInput = {
    AND?: chatsWhereInput | chatsWhereInput[]
    OR?: chatsWhereInput[]
    NOT?: chatsWhereInput | chatsWhereInput[]
    id?: BigIntFilter<"chats"> | bigint | number
    created_at?: DateTimeFilter<"chats"> | Date | string
    updated_at?: DateTimeFilter<"chats"> | Date | string
    chat_members?: Chat_membersListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type chatsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chat_members?: chat_membersOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type chatsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: chatsWhereInput | chatsWhereInput[]
    OR?: chatsWhereInput[]
    NOT?: chatsWhereInput | chatsWhereInput[]
    created_at?: DateTimeFilter<"chats"> | Date | string
    updated_at?: DateTimeFilter<"chats"> | Date | string
    chat_members?: Chat_membersListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id">

  export type chatsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: chatsCountOrderByAggregateInput
    _avg?: chatsAvgOrderByAggregateInput
    _max?: chatsMaxOrderByAggregateInput
    _min?: chatsMinOrderByAggregateInput
    _sum?: chatsSumOrderByAggregateInput
  }

  export type chatsScalarWhereWithAggregatesInput = {
    AND?: chatsScalarWhereWithAggregatesInput | chatsScalarWhereWithAggregatesInput[]
    OR?: chatsScalarWhereWithAggregatesInput[]
    NOT?: chatsScalarWhereWithAggregatesInput | chatsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"chats"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"chats"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"chats"> | Date | string
  }

  export type highlightsWhereInput = {
    AND?: highlightsWhereInput | highlightsWhereInput[]
    OR?: highlightsWhereInput[]
    NOT?: highlightsWhereInput | highlightsWhereInput[]
    id?: BigIntFilter<"highlights"> | bigint | number
    created_at?: DateTimeFilter<"highlights"> | Date | string
    content?: StringFilter<"highlights"> | string
    user_id?: BigIntFilter<"highlights"> | bigint | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type highlightsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type highlightsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: highlightsWhereInput | highlightsWhereInput[]
    OR?: highlightsWhereInput[]
    NOT?: highlightsWhereInput | highlightsWhereInput[]
    created_at?: DateTimeFilter<"highlights"> | Date | string
    content?: StringFilter<"highlights"> | string
    user_id?: BigIntFilter<"highlights"> | bigint | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type highlightsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    _count?: highlightsCountOrderByAggregateInput
    _avg?: highlightsAvgOrderByAggregateInput
    _max?: highlightsMaxOrderByAggregateInput
    _min?: highlightsMinOrderByAggregateInput
    _sum?: highlightsSumOrderByAggregateInput
  }

  export type highlightsScalarWhereWithAggregatesInput = {
    AND?: highlightsScalarWhereWithAggregatesInput | highlightsScalarWhereWithAggregatesInput[]
    OR?: highlightsScalarWhereWithAggregatesInput[]
    NOT?: highlightsScalarWhereWithAggregatesInput | highlightsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"highlights"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"highlights"> | Date | string
    content?: StringWithAggregatesFilter<"highlights"> | string
    user_id?: BigIntWithAggregatesFilter<"highlights"> | bigint | number
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: BigIntFilter<"messages"> | bigint | number
    chat_id?: BigIntFilter<"messages"> | bigint | number
    sender_id?: BigIntFilter<"messages"> | bigint | number
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
    is_read?: BoolFilter<"messages"> | boolean
    chats?: XOR<ChatsScalarRelationFilter, chatsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    chats?: chatsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    chat_id?: BigIntFilter<"messages"> | bigint | number
    sender_id?: BigIntFilter<"messages"> | bigint | number
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
    is_read?: BoolFilter<"messages"> | boolean
    chats?: XOR<ChatsScalarRelationFilter, chatsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"messages"> | bigint | number
    chat_id?: BigIntWithAggregatesFilter<"messages"> | bigint | number
    sender_id?: BigIntWithAggregatesFilter<"messages"> | bigint | number
    content?: StringWithAggregatesFilter<"messages"> | string
    created_at?: DateTimeWithAggregatesFilter<"messages"> | Date | string
    is_read?: BoolWithAggregatesFilter<"messages"> | boolean
  }

  export type storiesWhereInput = {
    AND?: storiesWhereInput | storiesWhereInput[]
    OR?: storiesWhereInput[]
    NOT?: storiesWhereInput | storiesWhereInput[]
    id?: BigIntFilter<"stories"> | bigint | number
    user_id?: BigIntFilter<"stories"> | bigint | number
    created_at?: DateTimeFilter<"stories"> | Date | string
    content?: StringFilter<"stories"> | string
    expires_at?: DateTimeFilter<"stories"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type storiesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    expires_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type storiesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: storiesWhereInput | storiesWhereInput[]
    OR?: storiesWhereInput[]
    NOT?: storiesWhereInput | storiesWhereInput[]
    user_id?: BigIntFilter<"stories"> | bigint | number
    created_at?: DateTimeFilter<"stories"> | Date | string
    content?: StringFilter<"stories"> | string
    expires_at?: DateTimeFilter<"stories"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type storiesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    expires_at?: SortOrder
    _count?: storiesCountOrderByAggregateInput
    _avg?: storiesAvgOrderByAggregateInput
    _max?: storiesMaxOrderByAggregateInput
    _min?: storiesMinOrderByAggregateInput
    _sum?: storiesSumOrderByAggregateInput
  }

  export type storiesScalarWhereWithAggregatesInput = {
    AND?: storiesScalarWhereWithAggregatesInput | storiesScalarWhereWithAggregatesInput[]
    OR?: storiesScalarWhereWithAggregatesInput[]
    NOT?: storiesScalarWhereWithAggregatesInput | storiesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"stories"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"stories"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"stories"> | Date | string
    content?: StringWithAggregatesFilter<"stories"> | string
    expires_at?: DateTimeWithAggregatesFilter<"stories"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    username?: StringFilter<"users"> | string
    birth_date?: DateTimeFilter<"users"> | Date | string
    password?: StringFilter<"users"> | string
    is_admin?: BoolFilter<"users"> | boolean
    description?: StringNullableFilter<"users"> | string | null
    prestige_point?: BigIntFilter<"users"> | bigint | number
    email?: StringFilter<"users"> | string
    actions?: ActionsListRelationFilter
    chat_members?: Chat_membersListRelationFilter
    highlights?: HighlightsListRelationFilter
    messages?: MessagesListRelationFilter
    stories?: StoriesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    birth_date?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    description?: SortOrderInput | SortOrder
    prestige_point?: SortOrder
    email?: SortOrder
    actions?: actionsOrderByRelationAggregateInput
    chat_members?: chat_membersOrderByRelationAggregateInput
    highlights?: highlightsOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    stories?: storiesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    birth_date?: DateTimeFilter<"users"> | Date | string
    password?: StringFilter<"users"> | string
    is_admin?: BoolFilter<"users"> | boolean
    description?: StringNullableFilter<"users"> | string | null
    prestige_point?: BigIntFilter<"users"> | bigint | number
    email?: StringFilter<"users"> | string
    actions?: ActionsListRelationFilter
    chat_members?: Chat_membersListRelationFilter
    highlights?: HighlightsListRelationFilter
    messages?: MessagesListRelationFilter
    stories?: StoriesListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    birth_date?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    description?: SortOrderInput | SortOrder
    prestige_point?: SortOrder
    email?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    username?: StringWithAggregatesFilter<"users"> | string
    birth_date?: DateTimeWithAggregatesFilter<"users"> | Date | string
    password?: StringWithAggregatesFilter<"users"> | string
    is_admin?: BoolWithAggregatesFilter<"users"> | boolean
    description?: StringNullableWithAggregatesFilter<"users"> | string | null
    prestige_point?: BigIntWithAggregatesFilter<"users"> | bigint | number
    email?: StringWithAggregatesFilter<"users"> | string
  }

  export type actionsCreateInput = {
    id?: bigint | number
    content: string
    created_at: Date | string
    expires_at: Date | string
    score?: bigint | number
    users: usersCreateNestedOneWithoutActionsInput
  }

  export type actionsUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    content: string
    created_at: Date | string
    expires_at: Date | string
    score?: bigint | number
  }

  export type actionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: BigIntFieldUpdateOperationsInput | bigint | number
    users?: usersUpdateOneRequiredWithoutActionsNestedInput
  }

  export type actionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type actionsCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    content: string
    created_at: Date | string
    expires_at: Date | string
    score?: bigint | number
  }

  export type actionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type actionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type chat_membersCreateInput = {
    chats?: chatsCreateNestedOneWithoutChat_membersInput
    users?: usersCreateNestedOneWithoutChat_membersInput
  }

  export type chat_membersUncheckedCreateInput = {
    chat_id?: bigint | number
    user_Id?: bigint | number
  }

  export type chat_membersUpdateInput = {
    chats?: chatsUpdateOneRequiredWithoutChat_membersNestedInput
    users?: usersUpdateOneRequiredWithoutChat_membersNestedInput
  }

  export type chat_membersUncheckedUpdateInput = {
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_Id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type chat_membersCreateManyInput = {
    chat_id?: bigint | number
    user_Id?: bigint | number
  }

  export type chat_membersUpdateManyMutationInput = {

  }

  export type chat_membersUncheckedUpdateManyInput = {
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_Id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type chatsCreateInput = {
    id?: bigint | number
    created_at: Date | string
    updated_at: Date | string
    chat_members?: chat_membersCreateNestedManyWithoutChatsInput
    messages?: messagesCreateNestedManyWithoutChatsInput
  }

  export type chatsUncheckedCreateInput = {
    id?: bigint | number
    created_at: Date | string
    updated_at: Date | string
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutChatsInput
    messages?: messagesUncheckedCreateNestedManyWithoutChatsInput
  }

  export type chatsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_members?: chat_membersUpdateManyWithoutChatsNestedInput
    messages?: messagesUpdateManyWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_members?: chat_membersUncheckedUpdateManyWithoutChatsNestedInput
    messages?: messagesUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type chatsCreateManyInput = {
    id?: bigint | number
    created_at: Date | string
    updated_at: Date | string
  }

  export type chatsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type highlightsCreateInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
    users: usersCreateNestedOneWithoutHighlightsInput
  }

  export type highlightsUncheckedCreateInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
    user_id: bigint | number
  }

  export type highlightsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type highlightsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type highlightsCreateManyInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
    user_id: bigint | number
  }

  export type highlightsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type highlightsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type messagesCreateInput = {
    id?: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
    chats: chatsCreateNestedOneWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: bigint | number
    chat_id: bigint | number
    sender_id: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
  }

  export type messagesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    chats?: chatsUpdateOneRequiredWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type messagesCreateManyInput = {
    id?: bigint | number
    chat_id: bigint | number
    sender_id: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
  }

  export type messagesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type storiesCreateInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
    expires_at: Date | string
    users: usersCreateNestedOneWithoutStoriesInput
  }

  export type storiesUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    created_at: Date | string
    content: string
    expires_at: Date | string
  }

  export type storiesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutStoriesNestedInput
  }

  export type storiesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storiesCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    created_at: Date | string
    content: string
    expires_at: Date | string
  }

  export type storiesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storiesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    highlights?: highlightsCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    stories?: storiesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsUncheckedCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    highlights?: highlightsUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    stories?: storiesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    stories?: storiesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUncheckedUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    stories?: storiesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type actionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    score?: SortOrder
  }

  export type actionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type actionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    score?: SortOrder
  }

  export type actionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    score?: SortOrder
  }

  export type actionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatsScalarRelationFilter = {
    is?: chatsWhereInput
    isNot?: chatsWhereInput
  }

  export type chat_membersChat_idUser_IdCompoundUniqueInput = {
    chat_id: bigint | number
    user_Id: bigint | number
  }

  export type chat_membersCountOrderByAggregateInput = {
    chat_id?: SortOrder
    user_Id?: SortOrder
  }

  export type chat_membersAvgOrderByAggregateInput = {
    chat_id?: SortOrder
    user_Id?: SortOrder
  }

  export type chat_membersMaxOrderByAggregateInput = {
    chat_id?: SortOrder
    user_Id?: SortOrder
  }

  export type chat_membersMinOrderByAggregateInput = {
    chat_id?: SortOrder
    user_Id?: SortOrder
  }

  export type chat_membersSumOrderByAggregateInput = {
    chat_id?: SortOrder
    user_Id?: SortOrder
  }

  export type Chat_membersListRelationFilter = {
    every?: chat_membersWhereInput
    some?: chat_membersWhereInput
    none?: chat_membersWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type chat_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type chatsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chatsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type chatsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type chatsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type highlightsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
  }

  export type highlightsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type highlightsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
  }

  export type highlightsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
  }

  export type highlightsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    sender_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type storiesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    expires_at?: SortOrder
  }

  export type storiesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type storiesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    expires_at?: SortOrder
  }

  export type storiesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    content?: SortOrder
    expires_at?: SortOrder
  }

  export type storiesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ActionsListRelationFilter = {
    every?: actionsWhereInput
    some?: actionsWhereInput
    none?: actionsWhereInput
  }

  export type HighlightsListRelationFilter = {
    every?: highlightsWhereInput
    some?: highlightsWhereInput
    none?: highlightsWhereInput
  }

  export type StoriesListRelationFilter = {
    every?: storiesWhereInput
    some?: storiesWhereInput
    none?: storiesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type actionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type highlightsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    birth_date?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    description?: SortOrder
    prestige_point?: SortOrder
    email?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    prestige_point?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    birth_date?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    description?: SortOrder
    prestige_point?: SortOrder
    email?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    birth_date?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    description?: SortOrder
    prestige_point?: SortOrder
    email?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    prestige_point?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutActionsInput = {
    create?: XOR<usersCreateWithoutActionsInput, usersUncheckedCreateWithoutActionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActionsInput
    connect?: usersWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<usersCreateWithoutActionsInput, usersUncheckedCreateWithoutActionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActionsInput
    upsert?: usersUpsertWithoutActionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutActionsInput, usersUpdateWithoutActionsInput>, usersUncheckedUpdateWithoutActionsInput>
  }

  export type chatsCreateNestedOneWithoutChat_membersInput = {
    create?: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: chatsCreateOrConnectWithoutChat_membersInput
    connect?: chatsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutChat_membersInput = {
    create?: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChat_membersInput
    connect?: usersWhereUniqueInput
  }

  export type chatsUpdateOneRequiredWithoutChat_membersNestedInput = {
    create?: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: chatsCreateOrConnectWithoutChat_membersInput
    upsert?: chatsUpsertWithoutChat_membersInput
    connect?: chatsWhereUniqueInput
    update?: XOR<XOR<chatsUpdateToOneWithWhereWithoutChat_membersInput, chatsUpdateWithoutChat_membersInput>, chatsUncheckedUpdateWithoutChat_membersInput>
  }

  export type usersUpdateOneRequiredWithoutChat_membersNestedInput = {
    create?: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChat_membersInput
    upsert?: usersUpsertWithoutChat_membersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChat_membersInput, usersUpdateWithoutChat_membersInput>, usersUncheckedUpdateWithoutChat_membersInput>
  }

  export type chat_membersCreateNestedManyWithoutChatsInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutChatsInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type chat_membersUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type chat_membersUpdateManyWithoutChatsNestedInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutChatsInput | chat_membersUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutChatsInput | chat_membersUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutChatsInput | chat_membersUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutChatsNestedInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutChatsInput | messagesUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutChatsInput | messagesUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutChatsInput | messagesUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type chat_membersUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput> | chat_membersCreateWithoutChatsInput[] | chat_membersUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutChatsInput | chat_membersCreateOrConnectWithoutChatsInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutChatsInput | chat_membersUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: chat_membersCreateManyChatsInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutChatsInput | chat_membersUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutChatsInput | chat_membersUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput> | messagesCreateWithoutChatsInput[] | messagesUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutChatsInput | messagesCreateOrConnectWithoutChatsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutChatsInput | messagesUpsertWithWhereUniqueWithoutChatsInput[]
    createMany?: messagesCreateManyChatsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutChatsInput | messagesUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutChatsInput | messagesUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<usersCreateWithoutHighlightsInput, usersUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: usersCreateOrConnectWithoutHighlightsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<usersCreateWithoutHighlightsInput, usersUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: usersCreateOrConnectWithoutHighlightsInput
    upsert?: usersUpsertWithoutHighlightsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutHighlightsInput, usersUpdateWithoutHighlightsInput>, usersUncheckedUpdateWithoutHighlightsInput>
  }

  export type chatsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatsCreateOrConnectWithoutMessagesInput
    connect?: chatsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type chatsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatsCreateOrConnectWithoutMessagesInput
    upsert?: chatsUpsertWithoutMessagesInput
    connect?: chatsWhereUniqueInput
    update?: XOR<XOR<chatsUpdateToOneWithWhereWithoutMessagesInput, chatsUpdateWithoutMessagesInput>, chatsUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    upsert?: usersUpsertWithoutMessagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMessagesInput, usersUpdateWithoutMessagesInput>, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersCreateNestedOneWithoutStoriesInput = {
    create?: XOR<usersCreateWithoutStoriesInput, usersUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutStoriesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutStoriesNestedInput = {
    create?: XOR<usersCreateWithoutStoriesInput, usersUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutStoriesInput
    upsert?: usersUpsertWithoutStoriesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStoriesInput, usersUpdateWithoutStoriesInput>, usersUncheckedUpdateWithoutStoriesInput>
  }

  export type actionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<actionsCreateWithoutUsersInput, actionsUncheckedCreateWithoutUsersInput> | actionsCreateWithoutUsersInput[] | actionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actionsCreateOrConnectWithoutUsersInput | actionsCreateOrConnectWithoutUsersInput[]
    createMany?: actionsCreateManyUsersInputEnvelope
    connect?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
  }

  export type chat_membersCreateNestedManyWithoutUsersInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type highlightsCreateNestedManyWithoutUsersInput = {
    create?: XOR<highlightsCreateWithoutUsersInput, highlightsUncheckedCreateWithoutUsersInput> | highlightsCreateWithoutUsersInput[] | highlightsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: highlightsCreateOrConnectWithoutUsersInput | highlightsCreateOrConnectWithoutUsersInput[]
    createMany?: highlightsCreateManyUsersInputEnvelope
    connect?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type storiesCreateNestedManyWithoutUsersInput = {
    create?: XOR<storiesCreateWithoutUsersInput, storiesUncheckedCreateWithoutUsersInput> | storiesCreateWithoutUsersInput[] | storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutUsersInput | storiesCreateOrConnectWithoutUsersInput[]
    createMany?: storiesCreateManyUsersInputEnvelope
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
  }

  export type actionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<actionsCreateWithoutUsersInput, actionsUncheckedCreateWithoutUsersInput> | actionsCreateWithoutUsersInput[] | actionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actionsCreateOrConnectWithoutUsersInput | actionsCreateOrConnectWithoutUsersInput[]
    createMany?: actionsCreateManyUsersInputEnvelope
    connect?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
  }

  export type chat_membersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
  }

  export type highlightsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<highlightsCreateWithoutUsersInput, highlightsUncheckedCreateWithoutUsersInput> | highlightsCreateWithoutUsersInput[] | highlightsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: highlightsCreateOrConnectWithoutUsersInput | highlightsCreateOrConnectWithoutUsersInput[]
    createMany?: highlightsCreateManyUsersInputEnvelope
    connect?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type storiesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<storiesCreateWithoutUsersInput, storiesUncheckedCreateWithoutUsersInput> | storiesCreateWithoutUsersInput[] | storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutUsersInput | storiesCreateOrConnectWithoutUsersInput[]
    createMany?: storiesCreateManyUsersInputEnvelope
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type actionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<actionsCreateWithoutUsersInput, actionsUncheckedCreateWithoutUsersInput> | actionsCreateWithoutUsersInput[] | actionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actionsCreateOrConnectWithoutUsersInput | actionsCreateOrConnectWithoutUsersInput[]
    upsert?: actionsUpsertWithWhereUniqueWithoutUsersInput | actionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: actionsCreateManyUsersInputEnvelope
    set?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    disconnect?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    delete?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    connect?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    update?: actionsUpdateWithWhereUniqueWithoutUsersInput | actionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: actionsUpdateManyWithWhereWithoutUsersInput | actionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: actionsScalarWhereInput | actionsScalarWhereInput[]
  }

  export type chat_membersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutUsersInput | chat_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutUsersInput | chat_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutUsersInput | chat_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type highlightsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<highlightsCreateWithoutUsersInput, highlightsUncheckedCreateWithoutUsersInput> | highlightsCreateWithoutUsersInput[] | highlightsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: highlightsCreateOrConnectWithoutUsersInput | highlightsCreateOrConnectWithoutUsersInput[]
    upsert?: highlightsUpsertWithWhereUniqueWithoutUsersInput | highlightsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: highlightsCreateManyUsersInputEnvelope
    set?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    disconnect?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    delete?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    connect?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    update?: highlightsUpdateWithWhereUniqueWithoutUsersInput | highlightsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: highlightsUpdateManyWithWhereWithoutUsersInput | highlightsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: highlightsScalarWhereInput | highlightsScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type storiesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<storiesCreateWithoutUsersInput, storiesUncheckedCreateWithoutUsersInput> | storiesCreateWithoutUsersInput[] | storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutUsersInput | storiesCreateOrConnectWithoutUsersInput[]
    upsert?: storiesUpsertWithWhereUniqueWithoutUsersInput | storiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: storiesCreateManyUsersInputEnvelope
    set?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    disconnect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    delete?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    update?: storiesUpdateWithWhereUniqueWithoutUsersInput | storiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: storiesUpdateManyWithWhereWithoutUsersInput | storiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: storiesScalarWhereInput | storiesScalarWhereInput[]
  }

  export type actionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<actionsCreateWithoutUsersInput, actionsUncheckedCreateWithoutUsersInput> | actionsCreateWithoutUsersInput[] | actionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actionsCreateOrConnectWithoutUsersInput | actionsCreateOrConnectWithoutUsersInput[]
    upsert?: actionsUpsertWithWhereUniqueWithoutUsersInput | actionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: actionsCreateManyUsersInputEnvelope
    set?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    disconnect?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    delete?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    connect?: actionsWhereUniqueInput | actionsWhereUniqueInput[]
    update?: actionsUpdateWithWhereUniqueWithoutUsersInput | actionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: actionsUpdateManyWithWhereWithoutUsersInput | actionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: actionsScalarWhereInput | actionsScalarWhereInput[]
  }

  export type chat_membersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput> | chat_membersCreateWithoutUsersInput[] | chat_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chat_membersCreateOrConnectWithoutUsersInput | chat_membersCreateOrConnectWithoutUsersInput[]
    upsert?: chat_membersUpsertWithWhereUniqueWithoutUsersInput | chat_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chat_membersCreateManyUsersInputEnvelope
    set?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    disconnect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    delete?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    connect?: chat_membersWhereUniqueInput | chat_membersWhereUniqueInput[]
    update?: chat_membersUpdateWithWhereUniqueWithoutUsersInput | chat_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chat_membersUpdateManyWithWhereWithoutUsersInput | chat_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
  }

  export type highlightsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<highlightsCreateWithoutUsersInput, highlightsUncheckedCreateWithoutUsersInput> | highlightsCreateWithoutUsersInput[] | highlightsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: highlightsCreateOrConnectWithoutUsersInput | highlightsCreateOrConnectWithoutUsersInput[]
    upsert?: highlightsUpsertWithWhereUniqueWithoutUsersInput | highlightsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: highlightsCreateManyUsersInputEnvelope
    set?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    disconnect?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    delete?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    connect?: highlightsWhereUniqueInput | highlightsWhereUniqueInput[]
    update?: highlightsUpdateWithWhereUniqueWithoutUsersInput | highlightsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: highlightsUpdateManyWithWhereWithoutUsersInput | highlightsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: highlightsScalarWhereInput | highlightsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type storiesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<storiesCreateWithoutUsersInput, storiesUncheckedCreateWithoutUsersInput> | storiesCreateWithoutUsersInput[] | storiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutUsersInput | storiesCreateOrConnectWithoutUsersInput[]
    upsert?: storiesUpsertWithWhereUniqueWithoutUsersInput | storiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: storiesCreateManyUsersInputEnvelope
    set?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    disconnect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    delete?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    update?: storiesUpdateWithWhereUniqueWithoutUsersInput | storiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: storiesUpdateManyWithWhereWithoutUsersInput | storiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: storiesScalarWhereInput | storiesScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutActionsInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    highlights?: highlightsCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    stories?: storiesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutActionsInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    highlights?: highlightsUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    stories?: storiesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutActionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutActionsInput, usersUncheckedCreateWithoutActionsInput>
  }

  export type usersUpsertWithoutActionsInput = {
    update: XOR<usersUpdateWithoutActionsInput, usersUncheckedUpdateWithoutActionsInput>
    create: XOR<usersCreateWithoutActionsInput, usersUncheckedCreateWithoutActionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutActionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutActionsInput, usersUncheckedUpdateWithoutActionsInput>
  }

  export type usersUpdateWithoutActionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    stories?: storiesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutActionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    stories?: storiesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chatsCreateWithoutChat_membersInput = {
    id?: bigint | number
    created_at: Date | string
    updated_at: Date | string
    messages?: messagesCreateNestedManyWithoutChatsInput
  }

  export type chatsUncheckedCreateWithoutChat_membersInput = {
    id?: bigint | number
    created_at: Date | string
    updated_at: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutChatsInput
  }

  export type chatsCreateOrConnectWithoutChat_membersInput = {
    where: chatsWhereUniqueInput
    create: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
  }

  export type usersCreateWithoutChat_membersInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsCreateNestedManyWithoutUsersInput
    highlights?: highlightsCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    stories?: storiesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChat_membersInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsUncheckedCreateNestedManyWithoutUsersInput
    highlights?: highlightsUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    stories?: storiesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChat_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
  }

  export type chatsUpsertWithoutChat_membersInput = {
    update: XOR<chatsUpdateWithoutChat_membersInput, chatsUncheckedUpdateWithoutChat_membersInput>
    create: XOR<chatsCreateWithoutChat_membersInput, chatsUncheckedCreateWithoutChat_membersInput>
    where?: chatsWhereInput
  }

  export type chatsUpdateToOneWithWhereWithoutChat_membersInput = {
    where?: chatsWhereInput
    data: XOR<chatsUpdateWithoutChat_membersInput, chatsUncheckedUpdateWithoutChat_membersInput>
  }

  export type chatsUpdateWithoutChat_membersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateWithoutChat_membersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type usersUpsertWithoutChat_membersInput = {
    update: XOR<usersUpdateWithoutChat_membersInput, usersUncheckedUpdateWithoutChat_membersInput>
    create: XOR<usersCreateWithoutChat_membersInput, usersUncheckedCreateWithoutChat_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChat_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChat_membersInput, usersUncheckedUpdateWithoutChat_membersInput>
  }

  export type usersUpdateWithoutChat_membersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    stories?: storiesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChat_membersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUncheckedUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    stories?: storiesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chat_membersCreateWithoutChatsInput = {
    users?: usersCreateNestedOneWithoutChat_membersInput
  }

  export type chat_membersUncheckedCreateWithoutChatsInput = {
    user_Id?: bigint | number
  }

  export type chat_membersCreateOrConnectWithoutChatsInput = {
    where: chat_membersWhereUniqueInput
    create: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput>
  }

  export type chat_membersCreateManyChatsInputEnvelope = {
    data: chat_membersCreateManyChatsInput | chat_membersCreateManyChatsInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutChatsInput = {
    id?: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
    users: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutChatsInput = {
    id?: bigint | number
    sender_id: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
  }

  export type messagesCreateOrConnectWithoutChatsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput>
  }

  export type messagesCreateManyChatsInputEnvelope = {
    data: messagesCreateManyChatsInput | messagesCreateManyChatsInput[]
    skipDuplicates?: boolean
  }

  export type chat_membersUpsertWithWhereUniqueWithoutChatsInput = {
    where: chat_membersWhereUniqueInput
    update: XOR<chat_membersUpdateWithoutChatsInput, chat_membersUncheckedUpdateWithoutChatsInput>
    create: XOR<chat_membersCreateWithoutChatsInput, chat_membersUncheckedCreateWithoutChatsInput>
  }

  export type chat_membersUpdateWithWhereUniqueWithoutChatsInput = {
    where: chat_membersWhereUniqueInput
    data: XOR<chat_membersUpdateWithoutChatsInput, chat_membersUncheckedUpdateWithoutChatsInput>
  }

  export type chat_membersUpdateManyWithWhereWithoutChatsInput = {
    where: chat_membersScalarWhereInput
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyWithoutChatsInput>
  }

  export type chat_membersScalarWhereInput = {
    AND?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
    OR?: chat_membersScalarWhereInput[]
    NOT?: chat_membersScalarWhereInput | chat_membersScalarWhereInput[]
    chat_id?: BigIntFilter<"chat_members"> | bigint | number
    user_Id?: BigIntFilter<"chat_members"> | bigint | number
  }

  export type messagesUpsertWithWhereUniqueWithoutChatsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutChatsInput, messagesUncheckedUpdateWithoutChatsInput>
    create: XOR<messagesCreateWithoutChatsInput, messagesUncheckedCreateWithoutChatsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutChatsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutChatsInput, messagesUncheckedUpdateWithoutChatsInput>
  }

  export type messagesUpdateManyWithWhereWithoutChatsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutChatsInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: BigIntFilter<"messages"> | bigint | number
    chat_id?: BigIntFilter<"messages"> | bigint | number
    sender_id?: BigIntFilter<"messages"> | bigint | number
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
    is_read?: BoolFilter<"messages"> | boolean
  }

  export type usersCreateWithoutHighlightsInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    stories?: storiesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutHighlightsInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsUncheckedCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    stories?: storiesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutHighlightsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutHighlightsInput, usersUncheckedCreateWithoutHighlightsInput>
  }

  export type usersUpsertWithoutHighlightsInput = {
    update: XOR<usersUpdateWithoutHighlightsInput, usersUncheckedUpdateWithoutHighlightsInput>
    create: XOR<usersCreateWithoutHighlightsInput, usersUncheckedCreateWithoutHighlightsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutHighlightsInput, usersUncheckedUpdateWithoutHighlightsInput>
  }

  export type usersUpdateWithoutHighlightsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    stories?: storiesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutHighlightsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUncheckedUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    stories?: storiesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type chatsCreateWithoutMessagesInput = {
    id?: bigint | number
    created_at: Date | string
    updated_at: Date | string
    chat_members?: chat_membersCreateNestedManyWithoutChatsInput
  }

  export type chatsUncheckedCreateWithoutMessagesInput = {
    id?: bigint | number
    created_at: Date | string
    updated_at: Date | string
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutChatsInput
  }

  export type chatsCreateOrConnectWithoutMessagesInput = {
    where: chatsWhereUniqueInput
    create: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
  }

  export type usersCreateWithoutMessagesInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    highlights?: highlightsCreateNestedManyWithoutUsersInput
    stories?: storiesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsUncheckedCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    highlights?: highlightsUncheckedCreateNestedManyWithoutUsersInput
    stories?: storiesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type chatsUpsertWithoutMessagesInput = {
    update: XOR<chatsUpdateWithoutMessagesInput, chatsUncheckedUpdateWithoutMessagesInput>
    create: XOR<chatsCreateWithoutMessagesInput, chatsUncheckedCreateWithoutMessagesInput>
    where?: chatsWhereInput
  }

  export type chatsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: chatsWhereInput
    data: XOR<chatsUpdateWithoutMessagesInput, chatsUncheckedUpdateWithoutMessagesInput>
  }

  export type chatsUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_members?: chat_membersUpdateManyWithoutChatsNestedInput
  }

  export type chatsUncheckedUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_members?: chat_membersUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type usersUpsertWithoutMessagesInput = {
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUpdateManyWithoutUsersNestedInput
    stories?: storiesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUncheckedUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUncheckedUpdateManyWithoutUsersNestedInput
    stories?: storiesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutStoriesInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersCreateNestedManyWithoutUsersInput
    highlights?: highlightsCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutStoriesInput = {
    id?: bigint | number
    username: string
    birth_date: Date | string
    password: string
    is_admin?: boolean
    description?: string | null
    prestige_point?: bigint | number
    email: string
    actions?: actionsUncheckedCreateNestedManyWithoutUsersInput
    chat_members?: chat_membersUncheckedCreateNestedManyWithoutUsersInput
    highlights?: highlightsUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutStoriesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStoriesInput, usersUncheckedCreateWithoutStoriesInput>
  }

  export type usersUpsertWithoutStoriesInput = {
    update: XOR<usersUpdateWithoutStoriesInput, usersUncheckedUpdateWithoutStoriesInput>
    create: XOR<usersCreateWithoutStoriesInput, usersUncheckedCreateWithoutStoriesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStoriesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStoriesInput, usersUncheckedUpdateWithoutStoriesInput>
  }

  export type usersUpdateWithoutStoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutStoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prestige_point?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    actions?: actionsUncheckedUpdateManyWithoutUsersNestedInput
    chat_members?: chat_membersUncheckedUpdateManyWithoutUsersNestedInput
    highlights?: highlightsUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type actionsCreateWithoutUsersInput = {
    id?: bigint | number
    content: string
    created_at: Date | string
    expires_at: Date | string
    score?: bigint | number
  }

  export type actionsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    content: string
    created_at: Date | string
    expires_at: Date | string
    score?: bigint | number
  }

  export type actionsCreateOrConnectWithoutUsersInput = {
    where: actionsWhereUniqueInput
    create: XOR<actionsCreateWithoutUsersInput, actionsUncheckedCreateWithoutUsersInput>
  }

  export type actionsCreateManyUsersInputEnvelope = {
    data: actionsCreateManyUsersInput | actionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type chat_membersCreateWithoutUsersInput = {
    chats?: chatsCreateNestedOneWithoutChat_membersInput
  }

  export type chat_membersUncheckedCreateWithoutUsersInput = {
    chat_id?: bigint | number
  }

  export type chat_membersCreateOrConnectWithoutUsersInput = {
    where: chat_membersWhereUniqueInput
    create: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput>
  }

  export type chat_membersCreateManyUsersInputEnvelope = {
    data: chat_membersCreateManyUsersInput | chat_membersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type highlightsCreateWithoutUsersInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
  }

  export type highlightsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
  }

  export type highlightsCreateOrConnectWithoutUsersInput = {
    where: highlightsWhereUniqueInput
    create: XOR<highlightsCreateWithoutUsersInput, highlightsUncheckedCreateWithoutUsersInput>
  }

  export type highlightsCreateManyUsersInputEnvelope = {
    data: highlightsCreateManyUsersInput | highlightsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutUsersInput = {
    id?: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
    chats: chatsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    chat_id: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
  }

  export type messagesCreateOrConnectWithoutUsersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesCreateManyUsersInputEnvelope = {
    data: messagesCreateManyUsersInput | messagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type storiesCreateWithoutUsersInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
    expires_at: Date | string
  }

  export type storiesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
    expires_at: Date | string
  }

  export type storiesCreateOrConnectWithoutUsersInput = {
    where: storiesWhereUniqueInput
    create: XOR<storiesCreateWithoutUsersInput, storiesUncheckedCreateWithoutUsersInput>
  }

  export type storiesCreateManyUsersInputEnvelope = {
    data: storiesCreateManyUsersInput | storiesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type actionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: actionsWhereUniqueInput
    update: XOR<actionsUpdateWithoutUsersInput, actionsUncheckedUpdateWithoutUsersInput>
    create: XOR<actionsCreateWithoutUsersInput, actionsUncheckedCreateWithoutUsersInput>
  }

  export type actionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: actionsWhereUniqueInput
    data: XOR<actionsUpdateWithoutUsersInput, actionsUncheckedUpdateWithoutUsersInput>
  }

  export type actionsUpdateManyWithWhereWithoutUsersInput = {
    where: actionsScalarWhereInput
    data: XOR<actionsUpdateManyMutationInput, actionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type actionsScalarWhereInput = {
    AND?: actionsScalarWhereInput | actionsScalarWhereInput[]
    OR?: actionsScalarWhereInput[]
    NOT?: actionsScalarWhereInput | actionsScalarWhereInput[]
    id?: BigIntFilter<"actions"> | bigint | number
    user_id?: BigIntFilter<"actions"> | bigint | number
    content?: StringFilter<"actions"> | string
    created_at?: DateTimeFilter<"actions"> | Date | string
    expires_at?: DateTimeFilter<"actions"> | Date | string
    score?: BigIntFilter<"actions"> | bigint | number
  }

  export type chat_membersUpsertWithWhereUniqueWithoutUsersInput = {
    where: chat_membersWhereUniqueInput
    update: XOR<chat_membersUpdateWithoutUsersInput, chat_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<chat_membersCreateWithoutUsersInput, chat_membersUncheckedCreateWithoutUsersInput>
  }

  export type chat_membersUpdateWithWhereUniqueWithoutUsersInput = {
    where: chat_membersWhereUniqueInput
    data: XOR<chat_membersUpdateWithoutUsersInput, chat_membersUncheckedUpdateWithoutUsersInput>
  }

  export type chat_membersUpdateManyWithWhereWithoutUsersInput = {
    where: chat_membersScalarWhereInput
    data: XOR<chat_membersUpdateManyMutationInput, chat_membersUncheckedUpdateManyWithoutUsersInput>
  }

  export type highlightsUpsertWithWhereUniqueWithoutUsersInput = {
    where: highlightsWhereUniqueInput
    update: XOR<highlightsUpdateWithoutUsersInput, highlightsUncheckedUpdateWithoutUsersInput>
    create: XOR<highlightsCreateWithoutUsersInput, highlightsUncheckedCreateWithoutUsersInput>
  }

  export type highlightsUpdateWithWhereUniqueWithoutUsersInput = {
    where: highlightsWhereUniqueInput
    data: XOR<highlightsUpdateWithoutUsersInput, highlightsUncheckedUpdateWithoutUsersInput>
  }

  export type highlightsUpdateManyWithWhereWithoutUsersInput = {
    where: highlightsScalarWhereInput
    data: XOR<highlightsUpdateManyMutationInput, highlightsUncheckedUpdateManyWithoutUsersInput>
  }

  export type highlightsScalarWhereInput = {
    AND?: highlightsScalarWhereInput | highlightsScalarWhereInput[]
    OR?: highlightsScalarWhereInput[]
    NOT?: highlightsScalarWhereInput | highlightsScalarWhereInput[]
    id?: BigIntFilter<"highlights"> | bigint | number
    created_at?: DateTimeFilter<"highlights"> | Date | string
    content?: StringFilter<"highlights"> | string
    user_id?: BigIntFilter<"highlights"> | bigint | number
  }

  export type messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
  }

  export type messagesUpdateManyWithWhereWithoutUsersInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type storiesUpsertWithWhereUniqueWithoutUsersInput = {
    where: storiesWhereUniqueInput
    update: XOR<storiesUpdateWithoutUsersInput, storiesUncheckedUpdateWithoutUsersInput>
    create: XOR<storiesCreateWithoutUsersInput, storiesUncheckedCreateWithoutUsersInput>
  }

  export type storiesUpdateWithWhereUniqueWithoutUsersInput = {
    where: storiesWhereUniqueInput
    data: XOR<storiesUpdateWithoutUsersInput, storiesUncheckedUpdateWithoutUsersInput>
  }

  export type storiesUpdateManyWithWhereWithoutUsersInput = {
    where: storiesScalarWhereInput
    data: XOR<storiesUpdateManyMutationInput, storiesUncheckedUpdateManyWithoutUsersInput>
  }

  export type storiesScalarWhereInput = {
    AND?: storiesScalarWhereInput | storiesScalarWhereInput[]
    OR?: storiesScalarWhereInput[]
    NOT?: storiesScalarWhereInput | storiesScalarWhereInput[]
    id?: BigIntFilter<"stories"> | bigint | number
    user_id?: BigIntFilter<"stories"> | bigint | number
    created_at?: DateTimeFilter<"stories"> | Date | string
    content?: StringFilter<"stories"> | string
    expires_at?: DateTimeFilter<"stories"> | Date | string
  }

  export type chat_membersCreateManyChatsInput = {
    user_Id?: bigint | number
  }

  export type messagesCreateManyChatsInput = {
    id?: bigint | number
    sender_id: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
  }

  export type chat_membersUpdateWithoutChatsInput = {
    users?: usersUpdateOneRequiredWithoutChat_membersNestedInput
  }

  export type chat_membersUncheckedUpdateWithoutChatsInput = {
    user_Id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type chat_membersUncheckedUpdateManyWithoutChatsInput = {
    user_Id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type messagesUpdateWithoutChatsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutChatsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type messagesUncheckedUpdateManyWithoutChatsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    sender_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type actionsCreateManyUsersInput = {
    id?: bigint | number
    content: string
    created_at: Date | string
    expires_at: Date | string
    score?: bigint | number
  }

  export type chat_membersCreateManyUsersInput = {
    chat_id?: bigint | number
  }

  export type highlightsCreateManyUsersInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
  }

  export type messagesCreateManyUsersInput = {
    id?: bigint | number
    chat_id: bigint | number
    content: string
    created_at: Date | string
    is_read?: boolean
  }

  export type storiesCreateManyUsersInput = {
    id?: bigint | number
    created_at: Date | string
    content: string
    expires_at: Date | string
  }

  export type actionsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type actionsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type actionsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type chat_membersUpdateWithoutUsersInput = {
    chats?: chatsUpdateOneRequiredWithoutChat_membersNestedInput
  }

  export type chat_membersUncheckedUpdateWithoutUsersInput = {
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type chat_membersUncheckedUpdateManyWithoutUsersInput = {
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type highlightsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type highlightsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type highlightsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type messagesUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    chats?: chatsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type messagesUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chat_id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type storiesUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storiesUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storiesUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}