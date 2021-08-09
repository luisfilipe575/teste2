/**
 * @remarks
 * The Recipient type used by the Printful API.
 */
export default interface Recipient {
  /**
   * @remarks
   * Full name
   */
  name?: string;
  /**
   * @remarks
   * Company name
   */
  company?: string;
  /**
   * @remarks
   * Address line 1
   */
  address1?: string;
  /**
   * @remarks
   * Address line 2
   */
  address2?: string;
  /**
   * @remarks
   * City
   */
  city?: string;
  /**
   * @remarks
   * State code
   */
  state_code?: string;
  /**
   * @remarks
   * State name
   */
  state_name?: string;
  /**
   * @remarks
   * Country code
   */
  country_code?: string;
  /**
   * @remarks
   * Country name
   */
  country_name?: string;
  /**
   * @remarks
   * ZIP/Postal code
   */
  zip?: string;
  /**
   * @remarks
   * Phone
   */
  phone?: string;
  /**
   * @remarks
   * E-mail
   */
  email?: string;
}
