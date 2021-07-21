/**
 * GnomeBluetooth 1.0
 *
 * Generated from 1.0
 */

import * as Atk from "@gi-types/atk1";
import * as Gtk from "@gi-types/gtk3";
import * as GObject from "@gi-types/gobject2";
import * as GLib from "@gi-types/glib2";
import * as Gio from "@gi-types/gio2";

export const CHOOSER_COMBO_FIRST_DEVICE: string;
export const TYPE_AUDIO: number;
export const TYPE_INPUT: number;
export const UUID_A2DP: number;
export const UUID_A2DP_SINK: number;
export const UUID_A2DP_SOURCE: number;
export const UUID_AVRCP_CONTROL: number;
export const UUID_AVRCP_TARGET: number;
export const UUID_DUN: number;
export const UUID_FTP: number;
export const UUID_GENERIC_AUDIO: number;
export const UUID_GENERIC_NET: number;
export const UUID_HFP_AG: number;
export const UUID_HFP_HF: number;
export const UUID_HID: number;
export const UUID_HSP: number;
export const UUID_HSP_AG: number;
export const UUID_IRMC: number;
export const UUID_OPP: number;
export const UUID_PAN_GN: number;
export const UUID_PAN_NAP: number;
export const UUID_PAN_PANU: number;
export const UUID_PBAP: number;
export const UUID_PNP: number;
export const UUID_SAP: number;
export const UUID_SDP: number;
export const UUID_SPP: number;
export const UUID_VDP_SOURCE: number;
export function appearance_to_type(appearance: number): Type;
export function class_to_type(_class: number): Type;
export function send_to_address(address: string, alias: string): void;
export function type_to_filter_string(type: number): string;
export function type_to_string(type: number): string;
export function uuid_to_string(uuid: string): string;
export function verify_address(bdaddr: string): boolean;

export namespace Category {
    export const $gtype: GObject.GType<Category>;
}

export enum Category {
    ALL = 0,
    PAIRED = 1,
    TRUSTED = 2,
    NOT_PAIRED_OR_TRUSTED = 3,
    PAIRED_OR_TRUSTED = 4,
}

export namespace Column {
    export const $gtype: GObject.GType<Column>;
}

export enum Column {
    PROXY = 0,
    PROPERTIES = 1,
    ADDRESS = 2,
    ALIAS = 3,
    NAME = 4,
    TYPE = 5,
    ICON = 6,
    DEFAULT = 7,
    PAIRED = 8,
    TRUSTED = 9,
    CONNECTED = 10,
    DISCOVERABLE = 11,
    DISCOVERING = 12,
    LEGACYPAIRING = 13,
    POWERED = 14,
    SERVICES = 15,
    UUIDS = 16,
}

export namespace Status {
    export const $gtype: GObject.GType<Status>;
}

export enum Status {
    INVALID = 0,
    DISCONNECTED = 1,
    CONNECTED = 2,
    CONNECTING = 3,
    PLAYING = 4,
}

export namespace Type {
    export const $gtype: GObject.GType<Type>;
}

export enum Type {
    ANY = 1,
    PHONE = 2,
    MODEM = 4,
    COMPUTER = 8,
    NETWORK = 16,
    HEADSET = 32,
    HEADPHONES = 64,
    OTHER_AUDIO = 128,
    KEYBOARD = 256,
    MOUSE = 512,
    CAMERA = 1024,
    PRINTER = 2048,
    JOYPAD = 4096,
    TABLET = 8192,
    VIDEO = 16384,
    REMOTE_CONTROL = 32768,
    SCANNER = 65536,
    DISPLAY = 131072,
    WEARABLE = 262144,
    TOY = 524288,
    SPEAKERS = 1048576,
}
export module Chooser {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;
        device_selected: string;
        deviceSelected: string;
        device_service_filter: string;
        deviceServiceFilter: string;
        device_type_filter: number;
        deviceTypeFilter: number;
        has_internal_device_filter: boolean;
        hasInternalDeviceFilter: boolean;
        show_connected: boolean;
        showConnected: boolean;
        show_device_category: boolean;
        showDeviceCategory: boolean;
        show_device_type: boolean;
        showDeviceType: boolean;
        show_device_type_column: boolean;
        showDeviceTypeColumn: boolean;
        show_pairing: boolean;
        showPairing: boolean;
        show_searching: boolean;
        showSearching: boolean;
    }
}
export class Chooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Chooser>;

    constructor(properties?: Partial<Chooser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Chooser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get device_selected(): string;
    set device_selected(val: string);
    get deviceSelected(): string;
    set deviceSelected(val: string);
    set device_service_filter(val: string);
    set deviceServiceFilter(val: string);
    get device_type_filter(): number;
    set device_type_filter(val: number);
    get deviceTypeFilter(): number;
    set deviceTypeFilter(val: number);
    get has_internal_device_filter(): boolean;
    get hasInternalDeviceFilter(): boolean;
    get show_connected(): boolean;
    set show_connected(val: boolean);
    get showConnected(): boolean;
    set showConnected(val: boolean);
    get show_device_category(): boolean;
    set show_device_category(val: boolean);
    get showDeviceCategory(): boolean;
    set showDeviceCategory(val: boolean);
    get show_device_type(): boolean;
    set show_device_type(val: boolean);
    get showDeviceType(): boolean;
    set showDeviceType(val: boolean);
    get show_device_type_column(): boolean;
    set show_device_type_column(val: boolean);
    get showDeviceTypeColumn(): boolean;
    set showDeviceTypeColumn(val: boolean);
    get show_pairing(): boolean;
    set show_pairing(val: boolean);
    get showPairing(): boolean;
    set showPairing(val: boolean);
    get show_searching(): boolean;
    set show_searching(val: boolean);
    get showSearching(): boolean;
    set showSearching(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "selected-device-activated", callback: (_source: this, address: string) => void): number;
    connect_after(signal: "selected-device-activated", callback: (_source: this, address: string) => void): number;
    emit(signal: "selected-device-activated", address: string): void;
    connect(signal: "selected-device-changed", callback: (_source: this, address: string) => void): number;
    connect_after(signal: "selected-device-changed", callback: (_source: this, address: string) => void): number;
    emit(signal: "selected-device-changed", address: string): void;

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): Chooser;

    // Members

    dump_selected_device(): void;
    get_scrolled_window(): Gtk.Widget;
    get_selected_device(): string;
    get_selected_device_icon(): string;
    get_selected_device_info(field: string, value: GObject.Value | any): boolean;
    get_selected_device_is_connected(): boolean;
    get_selected_device_name(): string;
    get_selected_device_type(): Type;
    start_discovery(): void;
    stop_discovery(): void;
    vfunc_selected_device_activated(address: string): void;
    vfunc_selected_device_changed(address: string): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module ChooserButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;
        device: string;
        is_available: boolean;
        isAvailable: boolean;
    }
}
export class ChooserButton
    extends Gtk.Button
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
{
    static $gtype: GObject.GType<ChooserButton>;

    constructor(properties?: Partial<ChooserButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get device(): string;
    set device(val: string);
    get is_available(): boolean;
    get isAvailable(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "chooser-created", callback: (_source: this, chooser: GObject.Object) => void): number;
    connect_after(signal: "chooser-created", callback: (_source: this, chooser: GObject.Object) => void): number;
    emit(signal: "chooser-created", chooser: GObject.Object): void;

    // Implemented Properties

    get action_name(): string;
    set action_name(val: string);
    get actionName(): string;
    set actionName(val: string);
    get action_target(): GLib.Variant;
    set action_target(val: GLib.Variant);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get related_action(): Gtk.Action;
    set related_action(val: Gtk.Action);
    get relatedAction(): Gtk.Action;
    set relatedAction(val: Gtk.Action);
    get use_action_appearance(): boolean;
    set use_action_appearance(val: boolean);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): ChooserButton;

    // Members

    available(): boolean;
    vfunc_chooser_created(chooser: Gtk.Widget): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Gtk.Action): void;
    get_related_action(): Gtk.Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Gtk.Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Gtk.Action | null): void;
    vfunc_sync_action_properties(action?: Gtk.Action | null): void;
    vfunc_update(action: Gtk.Action, property_name: string): void;
}
export module ChooserCombo {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;
        chooser: Chooser;
        device: string;
    }
}
export class ChooserCombo extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<ChooserCombo>;

    constructor(properties?: Partial<ChooserCombo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChooserCombo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get chooser(): Chooser;
    get device(): string;
    set device(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "chooser-created", callback: (_source: this, chooser: GObject.Object) => void): number;
    connect_after(signal: "chooser-created", callback: (_source: this, chooser: GObject.Object) => void): number;
    emit(signal: "chooser-created", chooser: GObject.Object): void;

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): ChooserCombo;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        default_adapter: string;
        defaultAdapter: string;
        default_adapter_discoverable: boolean;
        defaultAdapterDiscoverable: boolean;
        default_adapter_discovering: boolean;
        defaultAdapterDiscovering: boolean;
        default_adapter_name: string;
        defaultAdapterName: string;
        default_adapter_powered: boolean;
        defaultAdapterPowered: boolean;
    }
}
export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get default_adapter(): string;
    get defaultAdapter(): string;
    get default_adapter_discoverable(): boolean;
    set default_adapter_discoverable(val: boolean);
    get defaultAdapterDiscoverable(): boolean;
    set defaultAdapterDiscoverable(val: boolean);
    get default_adapter_discovering(): boolean;
    set default_adapter_discovering(val: boolean);
    get defaultAdapterDiscovering(): boolean;
    set defaultAdapterDiscovering(val: boolean);
    get default_adapter_name(): string;
    get defaultAdapterName(): string;
    get default_adapter_powered(): boolean;
    get defaultAdapterPowered(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "device-removed", callback: (_source: this, device: string) => void): number;
    connect_after(signal: "device-removed", callback: (_source: this, device: string) => void): number;
    emit(signal: "device-removed", device: string): void;

    // Constructors

    static ["new"](): Client;

    // Members

    connect_service(path: string, connect: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    connect_service(
        path: string,
        connect: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    connect_service(
        path: string,
        connect: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    connect_service_finish(res: Gio.AsyncResult): boolean;
    get_adapter_model(): Gtk.TreeModel;
    get_device_model(): Gtk.TreeModel;
    get_filter_model(func: Gtk.TreeModelFilterVisibleFunc): Gtk.TreeModel;
    get_model(): Gtk.TreeModel;
}
export module FilterWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;
        device_service_filter: string;
        deviceServiceFilter: string;
        device_type_filter: number;
        deviceTypeFilter: number;
        show_device_category: boolean;
        showDeviceCategory: boolean;
        show_device_type: boolean;
        showDeviceType: boolean;
    }
}
export class FilterWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<FilterWidget>;

    constructor(properties?: Partial<FilterWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FilterWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set device_service_filter(val: string);
    set deviceServiceFilter(val: string);
    get device_type_filter(): number;
    set device_type_filter(val: number);
    get deviceTypeFilter(): number;
    set deviceTypeFilter(val: number);
    get show_device_category(): boolean;
    set show_device_category(val: boolean);
    get showDeviceCategory(): boolean;
    set showDeviceCategory(val: boolean);
    get show_device_type(): boolean;
    set show_device_type(val: boolean);
    get showDeviceType(): boolean;
    set showDeviceType(val: boolean);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): FilterWidget;

    // Members

    bind_filter(chooser: Chooser): void;
    set_title(title: string): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module SettingsWidget {
    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class SettingsWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<SettingsWidget>;

    constructor(properties?: Partial<SettingsWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingsWidget.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "adapter-status-changed", callback: (_source: this) => void): number;
    connect_after(signal: "adapter-status-changed", callback: (_source: this) => void): number;
    emit(signal: "adapter-status-changed"): void;
    connect(signal: "panel-changed", callback: (_source: this, panel: string) => void): number;
    connect_after(signal: "panel-changed", callback: (_source: this, panel: string) => void): number;
    emit(signal: "panel-changed", panel: string): void;

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): SettingsWidget;

    // Members

    get_default_adapter_powered(): boolean;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
