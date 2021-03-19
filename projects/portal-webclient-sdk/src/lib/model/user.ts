/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserLinks } from './userLinks';
import { UserConfig } from './userConfig';
import { UserPermissions } from './userPermissions';


export interface User { 
    /**
     * Unique identifier of a user.
     */
    id?: string;
    /**
     * Unique reference if user comes from external source. Use for search only.
     */
    reference?: string;
    first_name?: string;
    last_name?: string;
    display_name?: string;
    email?: string;
    /**
     * True if the user can edit the MyAccount information
     */
    editable_profile?: boolean;
    permissions?: UserPermissions;
    /**
     * Values for CustomUserFields
     */
    customFields?: { [key: string]: object; };
    config?: UserConfig;
    _links?: UserLinks;
}
