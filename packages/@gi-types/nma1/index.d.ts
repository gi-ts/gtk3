/**
 * NMA 1.0
 *
 * Generated from 1.8.40
 */

import * as Atk from "@gi-types/atk1";
import * as Gio from "@gi-types/gio2";
import * as GObject from "@gi-types/gobject2";
import * as NM from "@gi-types/nm1";
import * as Gtk from "@gi-types/gtk3";
import * as cairo from "@gi-types/cairo1";
import * as GLib from "@gi-types/glib2";

export const BAR_CODE_SIZE: string;
export const BAR_CODE_TEXT: string;
export const BAR_CODE_WIDGET_CONNECTION: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): [boolean, string, string];
export function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NM.SettingSecretFlags;
export function utils_setup_password_storage(
    passwd_entry: Gtk.Widget,
    initial_flags: NM.SettingSecretFlags,
    setting: NM.Setting,
    password_flags_name: string,
    with_not_required: boolean,
    ask_mode: boolean
): void;
export function utils_update_password_storage(
    passwd_entry: Gtk.Widget,
    secret_flags: NM.SettingSecretFlags,
    setting: NM.Setting,
    password_flags_name: string
): void;
export type MobileWizardCallback = (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod) => void;

export namespace CertChooserFlags {
    export const $gtype: GObject.GType<CertChooserFlags>;
}

export enum CertChooserFlags {
    NONE = 0,
    CERT = 1,
    PASSWORDS = 2,
    PEM = 4,
    NO_PASSWORDS = 8,
}

export namespace MobileFamily {
    export const $gtype: GObject.GType<MobileFamily>;
}

export enum MobileFamily {
    UNKNOWN = 0,
    "3GPP" = 1,
    CDMA = 2,
}
export module BarCode {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        size: number;
        text: string;
    }
}
export class BarCode extends GObject.Object {
    static $gtype: GObject.GType<BarCode>;

    constructor(properties?: Partial<BarCode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BarCode.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get size(): number;
    set text(val: string);

    // Constructors

    static ["new"](text: string): BarCode;

    // Members

    draw(cr: cairo.Context): void;
    get_size(): number;
    set_text(text: string): void;
}
export module BarCodeWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;
        connection: NM.Connection;
    }
}
export class BarCodeWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<BarCodeWidget>;

    constructor(properties?: Partial<BarCodeWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BarCodeWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get connection(): NM.Connection;
    set connection(val: NM.Connection);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module CertChooser {
    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {
        [key: string]: any;
        flags: number;
        title: string;
    }
}
export class CertChooser extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<CertChooser>;

    constructor(properties?: Partial<CertChooser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CertChooser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set flags(val: number);
    set title(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "cert-password-validate", callback: (_source: this) => GLib.Error): number;
    connect_after(signal: "cert-password-validate", callback: (_source: this) => GLib.Error): number;
    emit(signal: "cert-password-validate"): void;
    connect(signal: "cert-validate", callback: (_source: this) => GLib.Error): number;
    connect_after(signal: "cert-validate", callback: (_source: this) => GLib.Error): number;
    emit(signal: "cert-validate"): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "key-password-validate", callback: (_source: this) => GLib.Error): number;
    connect_after(signal: "key-password-validate", callback: (_source: this) => GLib.Error): number;
    emit(signal: "key-password-validate"): void;
    connect(signal: "key-validate", callback: (_source: this) => GLib.Error): number;
    connect_after(signal: "key-validate", callback: (_source: this) => GLib.Error): number;
    emit(signal: "key-validate"): void;

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](title: string, flags: CertChooserFlags): CertChooser;
    // Conflicted with Gtk.Grid.new
    static ["new"](...args: never[]): any;

    // Members

    add_to_size_group(group: Gtk.SizeGroup): void;
    get_cert(): [string | null, NM.Setting8021xCKScheme];
    get_cert_password(): string;
    get_cert_password_flags(): NM.SettingSecretFlags;
    get_cert_uri(): string | null;
    get_key(): [string | null, NM.Setting8021xCKScheme];
    get_key_password(): string;
    get_key_password_flags(): NM.SettingSecretFlags;
    get_key_uri(): string | null;
    set_cert(value: string, scheme: NM.Setting8021xCKScheme): void;
    set_cert_password(password: string): void;
    set_cert_uri(uri: string): void;
    set_key(value: string, scheme: NM.Setting8021xCKScheme): void;
    set_key_password(password: string): void;
    set_key_uri(uri: string): void;
    setup_cert_password_storage(
        initial_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string,
        with_not_required: boolean,
        ask_mode: boolean
    ): void;
    setup_key_password_storage(
        initial_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string,
        with_not_required: boolean,
        ask_mode: boolean
    ): void;
    update_cert_password_storage(
        secret_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string
    ): void;
    update_key_password_storage(
        secret_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string
    ): void;
    validate(): boolean;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module MobileProvidersDatabase {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        country_codes: string;
        countryCodes: string;
        service_providers: string;
        serviceProviders: string;
    }
}
export class MobileProvidersDatabase
    extends GObject.Object
    implements Gio.AsyncInitable<MobileProvidersDatabase>, Gio.Initable
{
    static $gtype: GObject.GType<MobileProvidersDatabase>;

    constructor(properties?: Partial<MobileProvidersDatabase.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MobileProvidersDatabase.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get country_codes(): string;
    get countryCodes(): string;
    get service_providers(): string;
    get serviceProviders(): string;

    // Fields
    priv: MobileProvidersDatabasePrivate;

    // Constructors

    static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_sync(
        country_codes?: string | null,
        service_providers?: string | null,
        cancellable?: Gio.Cancellable | null
    ): MobileProvidersDatabase;

    // Members

    dump(): void;
    get_countries(): GLib.HashTable<string, CountryInfo>;
    lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;
    lookup_cdma_sid(sid: number): MobileProvider;
    lookup_country(country_code: string): CountryInfo;
    static new(
        country_codes?: string | null,
        service_providers?: string | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<MobileProvidersDatabase>;
    static new(
        country_codes: string | null,
        service_providers: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null
    ): void;
    static new(
        country_codes?: string | null,
        service_providers?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null
    ): Promise<MobileProvidersDatabase> | void;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module MobileWizard {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class MobileWizard extends GObject.Object {
    static $gtype: GObject.GType<MobileWizard>;

    constructor(properties?: Partial<MobileWizard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MobileWizard.ConstructorProperties>, ...args: any[]): void;

    // Members

    destroy(): void;
    present(): void;
}
export module VpnPasswordDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class VpnPasswordDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<VpnPasswordDialog>;

    constructor(properties?: Partial<VpnPasswordDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VpnPasswordDialog.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](title: string, message: string, password: string): VpnPasswordDialog;
    // Conflicted with Gtk.Dialog.new
    static ["new"](...args: never[]): any;

    // Members

    focus_password(): void;
    focus_password_secondary(): void;
    focus_password_ternary(): void;
    get_password(): string;
    get_password_secondary(): string;
    get_password_ternary(): string;
    run_and_block(): boolean;
    set_password(password: string): void;
    set_password_label(label: string): void;
    set_password_secondary(password_secondary: string): void;
    set_password_secondary_label(label: string): void;
    set_password_ternary(password_ternary: string): void;
    set_password_ternary_label(label: string): void;
    set_show_password(show: boolean): void;
    set_show_password_secondary(show: boolean): void;
    set_show_password_ternary(show: boolean): void;
}
export module WifiDialog {
    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class WifiDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<WifiDialog>;

    constructor(properties?: Partial<WifiDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WifiDialog.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        client: NM.Client,
        connection: NM.Connection,
        device: NM.Device,
        ap: NM.AccessPoint,
        secrets_only: boolean
    ): WifiDialog;
    // Conflicted with Gtk.Dialog.new
    static ["new"](...args: never[]): any;
    static new_for_create(client: NM.Client): WifiDialog;
    static new_for_hidden(client: NM.Client): WifiDialog;
    static new_for_other(client: NM.Client): WifiDialog;
    static new_for_secrets(
        client: NM.Client,
        connection: NM.Connection,
        secrets_setting_name: string,
        secrets_hints: string
    ): WifiDialog;

    // Members

    get_connection(): [NM.Connection, NM.Device, NM.AccessPoint];
    get_nag_ignored(): boolean;
    nag_user(): Gtk.Widget;
    set_nag_ignored(ignored: boolean): void;
}

export class CountryInfo {
    static $gtype: GObject.GType<CountryInfo>;

    constructor(copy: CountryInfo);

    // Members
    get_country_code(): string;
    get_country_name(): string;
    get_providers(): MobileProvider[];
    ref(): CountryInfo;
    unref(): void;
}

export class MobileAccessMethod {
    static $gtype: GObject.GType<MobileAccessMethod>;

    constructor(copy: MobileAccessMethod);

    // Members
    get_3gpp_apn(): string;
    get_dns(): string[];
    get_family(): MobileFamily;
    get_gateway(): string;
    get_name(): string;
    get_password(): string;
    get_username(): string;
    ref(): MobileAccessMethod;
    unref(): void;
}

export class MobileProvider {
    static $gtype: GObject.GType<MobileProvider>;

    constructor(copy: MobileProvider);

    // Members
    get_3gpp_mcc_mnc(): string[];
    get_cdma_sid(): number[];
    get_methods(): MobileAccessMethod[];
    get_name(): string;
    ref(): MobileProvider;
    unref(): void;
}

export class MobileProvidersDatabasePrivate {
    static $gtype: GObject.GType<MobileProvidersDatabasePrivate>;

    constructor(copy: MobileProvidersDatabasePrivate);
}

export class MobileWizardAccessMethod {
    static $gtype: GObject.GType<MobileWizardAccessMethod>;

    constructor(copy: MobileWizardAccessMethod);

    // Fields
    provider_name: string;
    plan_name: string;
    devtype: NM.DeviceModemCapabilities;
    username: string;
    password: string;
    gsm_apn: string;
}

export class Ws {
    static $gtype: GObject.GType<Ws>;

    constructor(copy: Ws);

    // Members
    adhoc_compatible(): boolean;
    hotspot_compatible(): boolean;
    validate(): boolean;
}

export class Ws8021x {
    static $gtype: GObject.GType<Ws8021x>;

    constructor(copy: Ws8021x);
}

export class Ws8021xClass {
    static $gtype: GObject.GType<Ws8021xClass>;

    constructor(copy: Ws8021xClass);
}

export class WsDynamicWep {
    static $gtype: GObject.GType<WsDynamicWep>;

    constructor(copy: WsDynamicWep);
}

export class WsDynamicWepClass {
    static $gtype: GObject.GType<WsDynamicWepClass>;

    constructor(copy: WsDynamicWepClass);
}

export class WsInterface {
    static $gtype: GObject.GType<WsInterface>;

    constructor(copy: WsInterface);
}

export class WsLeap {
    static $gtype: GObject.GType<WsLeap>;

    constructor(copy: WsLeap);
}

export class WsLeapClass {
    static $gtype: GObject.GType<WsLeapClass>;

    constructor(copy: WsLeapClass);
}

export class WsOwe {
    static $gtype: GObject.GType<WsOwe>;

    constructor(copy: WsOwe);
}

export class WsOweClass {
    static $gtype: GObject.GType<WsOweClass>;

    constructor(copy: WsOweClass);
}

export class WsSae {
    static $gtype: GObject.GType<WsSae>;

    constructor(copy: WsSae);
}

export class WsSaeClass {
    static $gtype: GObject.GType<WsSaeClass>;

    constructor(copy: WsSaeClass);
}

export class WsWepKey {
    static $gtype: GObject.GType<WsWepKey>;

    constructor(copy: WsWepKey);
}

export class WsWepKeyClass {
    static $gtype: GObject.GType<WsWepKeyClass>;

    constructor(copy: WsWepKeyClass);
}

export class WsWpaEap {
    static $gtype: GObject.GType<WsWpaEap>;

    constructor(copy: WsWpaEap);
}

export class WsWpaEapClass {
    static $gtype: GObject.GType<WsWpaEapClass>;

    constructor(copy: WsWpaEapClass);
}

export class WsWpaPsk {
    static $gtype: GObject.GType<WsWpaPsk>;

    constructor(copy: WsWpaPsk);
}

export class WsWpaPskClass {
    static $gtype: GObject.GType<WsWpaPskClass>;

    constructor(copy: WsWpaPskClass);
}
