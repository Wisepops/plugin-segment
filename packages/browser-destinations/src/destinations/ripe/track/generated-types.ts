// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * The new user ID, if user ID is not set
   */
  anonymousId: string
  /**
   * The ID associated with the user
   */
  userId?: string
  /**
   * The ID associated groupId
   */
  groupId?: string
  /**
   * The event name
   */
  event: string
  /**
   * Properties to send with the event
   */
  properties?: {
    [k: string]: unknown
  }
}