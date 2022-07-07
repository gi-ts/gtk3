/**
 * Handy 1
 *
 * Generated from 1.0
 */

import * as Atk from "@gi-types/atk1";
import * as Gtk from "@gi-types/gtk3";
import * as GObject from "@gi-types/gobject2";
import * as Gio from "@gi-types/gio2";
import * as GdkPixbuf from "@gi-types/gdkpixbuf2";
import * as GLib from "@gi-types/glib2";
import * as Gdk from "@gi-types/gdk3";
import * as Pango from "@gi-types/pango1";

export function ease_out_cubic(t: number): number;
export function enum_value_row_name(value: EnumValueObject, user_data?: any | null): string;
export function get_enable_animations(widget: Gtk.Widget): boolean;
export function init(): void;
export type AvatarImageLoadFunc = (size: number) => GdkPixbuf.Pixbuf | null;
export type ComboRowGetEnumValueNameFunc = (value: EnumValueObject) => string;
export type ComboRowGetNameFunc<A = GObject.Object> = (item: A) => string;

export namespace CenteringPolicy {
    export const $gtype: GObject.GType<CenteringPolicy>;
}

export enum CenteringPolicy {
    LOOSE = 0,
    STRICT = 1,
}

export namespace ColorScheme {
    export const $gtype: GObject.GType<ColorScheme>;
}

export enum ColorScheme {
    DEFAULT = 0,
    FORCE_LIGHT = 1,
    PREFER_LIGHT = 2,
    PREFER_DARK = 3,
    FORCE_DARK = 4,
}

export namespace DeckTransitionType {
    export const $gtype: GObject.GType<DeckTransitionType>;
}

export enum DeckTransitionType {
    OVER = 0,
    UNDER = 1,
    SLIDE = 2,
}

export namespace FlapFoldPolicy {
    export const $gtype: GObject.GType<FlapFoldPolicy>;
}

export enum FlapFoldPolicy {
    NEVER = 0,
    ALWAYS = 1,
    AUTO = 2,
}

export namespace FlapTransitionType {
    export const $gtype: GObject.GType<FlapTransitionType>;
}

export enum FlapTransitionType {
    OVER = 0,
    UNDER = 1,
    SLIDE = 2,
}

export namespace HeaderGroupChildType {
    export const $gtype: GObject.GType<HeaderGroupChildType>;
}

export enum HeaderGroupChildType {
    HEADER_BAR = 0,
    GTK_HEADER_BAR = 1,
    HEADER_GROUP = 2,
}

export namespace LeafletTransitionType {
    export const $gtype: GObject.GType<LeafletTransitionType>;
}

export enum LeafletTransitionType {
    OVER = 0,
    UNDER = 1,
    SLIDE = 2,
}

export namespace NavigationDirection {
    export const $gtype: GObject.GType<NavigationDirection>;
}

export enum NavigationDirection {
    BACK = 0,
    FORWARD = 1,
}

export namespace SqueezerTransitionType {
    export const $gtype: GObject.GType<SqueezerTransitionType>;
}

export enum SqueezerTransitionType {
    NONE = 0,
    CROSSFADE = 1,
}

export namespace ViewSwitcherPolicy {
    export const $gtype: GObject.GType<ViewSwitcherPolicy>;
}

export enum ViewSwitcherPolicy {
    AUTO = 0,
    NARROW = 1,
    WIDE = 2,
}
export module ActionRow {
    export interface ConstructorProperties extends PreferencesRow.ConstructorProperties {
        [key: string]: any;
        activatable_widget: Gtk.Widget;
        activatableWidget: Gtk.Widget;
        icon_name: string;
        iconName: string;
        subtitle: string;
        subtitle_lines: number;
        subtitleLines: number;
        title_lines: number;
        titleLines: number;
        use_underline: boolean;
        useUnderline: boolean;
    }
}
export class ActionRow extends PreferencesRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<ActionRow>;

    constructor(properties?: Partial<ActionRow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActionRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activatable_widget(): Gtk.Widget;
    set activatable_widget(val: Gtk.Widget);
    get activatableWidget(): Gtk.Widget;
    set activatableWidget(val: Gtk.Widget);
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get subtitle(): string;
    set subtitle(val: string);
    get subtitle_lines(): number;
    set subtitle_lines(val: number);
    get subtitleLines(): number;
    set subtitleLines(val: number);
    get title_lines(): number;
    set title_lines(val: number);
    get titleLines(): number;
    set titleLines(val: number);
    get use_underline(): boolean;
    set use_underline(val: boolean);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activated", callback: (_source: this) => void): number;
    connect_after(signal: "activated", callback: (_source: this) => void): number;
    emit(signal: "activated"): void;

    // Constructors

    static ["new"](): ActionRow;

    // Members

    activate(): void;
    // Conflicted with Gtk.Widget.activate
    activate(...args: never[]): any;
    add_prefix(widget: Gtk.Widget): void;
    get_activatable_widget(): Gtk.Widget | null;
    get_icon_name(): string;
    get_subtitle(): string | null;
    get_subtitle_lines(): number;
    get_title_lines(): number;
    get_use_underline(): boolean;
    set_activatable_widget(widget?: Gtk.Widget | null): void;
    set_icon_name(icon_name: string): void;
    set_subtitle(subtitle?: string | null): void;
    set_subtitle_lines(subtitle_lines: number): void;
    set_title_lines(title_lines: number): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_activate(): void;
}
export module ApplicationWindow {
    export interface ConstructorProperties extends Gtk.ApplicationWindow.ConstructorProperties {
        [key: string]: any;
    }
}
export class ApplicationWindow
    extends Gtk.ApplicationWindow
    implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable
{
    static $gtype: GObject.GType<ApplicationWindow>;

    constructor(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ApplicationWindow;

    // Implemented Members

    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    add_action(action: Gio.Action): void;
    add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;
    lookup_action(action_name: string): Gio.Action | null;
    remove_action(action_name: string): void;
    vfunc_add_action(action: Gio.Action): void;
    vfunc_lookup_action(action_name: string): Gio.Action | null;
    vfunc_remove_action(action_name: string): void;
}
export module Avatar {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;
        icon_name: string;
        iconName: string;
        loadable_icon: Gio.LoadableIcon;
        loadableIcon: Gio.LoadableIcon;
        show_initials: boolean;
        showInitials: boolean;
        size: number;
        text: string;
    }
}
export class Avatar extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Avatar>;

    constructor(properties?: Partial<Avatar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Avatar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get loadable_icon(): Gio.LoadableIcon;
    set loadable_icon(val: Gio.LoadableIcon);
    get loadableIcon(): Gio.LoadableIcon;
    set loadableIcon(val: Gio.LoadableIcon);
    get show_initials(): boolean;
    set show_initials(val: boolean);
    get showInitials(): boolean;
    set showInitials(val: boolean);
    get size(): number;
    set size(val: number);
    get text(): string;
    set text(val: string);

    // Constructors

    static ["new"](size: number, text: string | null, show_initials: boolean): Avatar;
    // Conflicted with Gtk.DrawingArea.new
    static ["new"](...args: never[]): any;

    // Members

    draw_to_pixbuf(size: number, scale_factor: number): GdkPixbuf.Pixbuf;
    draw_to_pixbuf_async(
        size: number,
        scale_factor: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<GdkPixbuf.Pixbuf>;
    draw_to_pixbuf_async(
        size: number,
        scale_factor: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    draw_to_pixbuf_async(
        size: number,
        scale_factor: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GdkPixbuf.Pixbuf> | void;
    draw_to_pixbuf_finish(async_result: Gio.AsyncResult): GdkPixbuf.Pixbuf;
    get_icon_name(): string | null;
    get_loadable_icon(): Gio.LoadableIcon | null;
    get_show_initials(): boolean;
    get_size(): number;
    get_text(): string | null;
    set_icon_name(icon_name?: string | null): void;
    set_image_load_func(load_image?: AvatarImageLoadFunc | null, destroy?: GLib.DestroyNotify | null): void;
    set_loadable_icon(icon?: Gio.LoadableIcon | null): void;
    set_show_initials(show_initials: boolean): void;
    set_size(size: number): void;
    set_text(text?: string | null): void;
}
export module Carousel {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;
        allow_long_swipes: boolean;
        allowLongSwipes: boolean;
        allow_mouse_drag: boolean;
        allowMouseDrag: boolean;
        allow_scroll_wheel: boolean;
        allowScrollWheel: boolean;
        animation_duration: number;
        animationDuration: number;
        interactive: boolean;
        n_pages: number;
        nPages: number;
        position: number;
        reveal_duration: number;
        revealDuration: number;
        spacing: number;
    }
}
export class Carousel extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
    static $gtype: GObject.GType<Carousel>;

    constructor(properties?: Partial<Carousel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Carousel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get allow_long_swipes(): boolean;
    set allow_long_swipes(val: boolean);
    get allowLongSwipes(): boolean;
    set allowLongSwipes(val: boolean);
    get allow_mouse_drag(): boolean;
    set allow_mouse_drag(val: boolean);
    get allowMouseDrag(): boolean;
    set allowMouseDrag(val: boolean);
    get allow_scroll_wheel(): boolean;
    set allow_scroll_wheel(val: boolean);
    get allowScrollWheel(): boolean;
    set allowScrollWheel(val: boolean);
    get animation_duration(): number;
    set animation_duration(val: number);
    get animationDuration(): number;
    set animationDuration(val: number);
    get interactive(): boolean;
    set interactive(val: boolean);
    get n_pages(): number;
    get nPages(): number;
    get position(): number;
    get reveal_duration(): number;
    set reveal_duration(val: number);
    get revealDuration(): number;
    set revealDuration(val: number);
    get spacing(): number;
    set spacing(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "page-changed", callback: (_source: this, index: number) => void): number;
    connect_after(signal: "page-changed", callback: (_source: this, index: number) => void): number;
    emit(signal: "page-changed", index: number): void;

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): Carousel;

    // Members

    get_allow_long_swipes(): boolean;
    get_allow_mouse_drag(): boolean;
    get_allow_scroll_wheel(): boolean;
    get_animation_duration(): number;
    get_interactive(): boolean;
    get_n_pages(): number;
    get_position(): number;
    get_reveal_duration(): number;
    get_spacing(): number;
    insert(child: Gtk.Widget, position: number): void;
    prepend(child: Gtk.Widget): void;
    reorder(child: Gtk.Widget, position: number): void;
    scroll_to(widget: Gtk.Widget): void;
    scroll_to_full(widget: Gtk.Widget, duration: number): void;
    set_allow_long_swipes(allow_long_swipes: boolean): void;
    set_allow_mouse_drag(allow_mouse_drag: boolean): void;
    set_allow_scroll_wheel(allow_scroll_wheel: boolean): void;
    set_animation_duration(duration: number): void;
    set_interactive(interactive: boolean): void;
    set_reveal_duration(reveal_duration: number): void;
    set_spacing(spacing: number): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
    emit_child_switched(index: number, duration: number): void;
    get_cancel_progress(): number;
    get_distance(): number;
    get_progress(): number;
    get_snap_points(): number[];
    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    get_swipe_tracker(): SwipeTracker;
    switch_child(index: number, duration: number): void;
    vfunc_get_cancel_progress(): number;
    vfunc_get_distance(): number;
    vfunc_get_progress(): number;
    vfunc_get_snap_points(): number[];
    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    vfunc_get_swipe_tracker(): SwipeTracker;
    vfunc_switch_child(index: number, duration: number): void;
}
export module CarouselIndicatorDots {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;
        carousel: Carousel;
    }
}
export class CarouselIndicatorDots
    extends Gtk.DrawingArea
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable
{
    static $gtype: GObject.GType<CarouselIndicatorDots>;

    constructor(properties?: Partial<CarouselIndicatorDots.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CarouselIndicatorDots.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get carousel(): Carousel;
    set carousel(val: Carousel);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): CarouselIndicatorDots;

    // Members

    get_carousel(): Carousel | null;
    set_carousel(carousel?: Carousel | null): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module CarouselIndicatorLines {
    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {
        [key: string]: any;
        carousel: Carousel;
    }
}
export class CarouselIndicatorLines
    extends Gtk.DrawingArea
    implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable
{
    static $gtype: GObject.GType<CarouselIndicatorLines>;

    constructor(properties?: Partial<CarouselIndicatorLines.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CarouselIndicatorLines.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get carousel(): Carousel;
    set carousel(val: Carousel);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): CarouselIndicatorLines;

    // Members

    get_carousel(): Carousel | null;
    set_carousel(carousel?: Carousel | null): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module Clamp {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        maximum_size: number;
        maximumSize: number;
        tightening_threshold: number;
        tighteningThreshold: number;
    }
}
export class Clamp extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Clamp>;

    constructor(properties?: Partial<Clamp.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clamp.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get maximum_size(): number;
    set maximum_size(val: number);
    get maximumSize(): number;
    set maximumSize(val: number);
    get tightening_threshold(): number;
    set tightening_threshold(val: number);
    get tighteningThreshold(): number;
    set tighteningThreshold(val: number);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): Clamp;

    // Members

    get_maximum_size(): number;
    get_tightening_threshold(): number;
    set_maximum_size(maximum_size: number): void;
    set_tightening_threshold(tightening_threshold: number): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module ComboRow {
    export interface ConstructorProperties extends ActionRow.ConstructorProperties {
        [key: string]: any;
        selected_index: number;
        selectedIndex: number;
        use_subtitle: boolean;
        useSubtitle: boolean;
    }
}
export class ComboRow extends ActionRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<ComboRow>;

    constructor(properties?: Partial<ComboRow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ComboRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get selected_index(): number;
    set selected_index(val: number);
    get selectedIndex(): number;
    set selectedIndex(val: number);
    get use_subtitle(): boolean;
    set use_subtitle(val: boolean);
    get useSubtitle(): boolean;
    set useSubtitle(val: boolean);

    // Constructors

    static ["new"](): ComboRow;

    // Members

    bind_model(
        model?: Gio.ListModel | null,
        create_list_widget_func?: Gtk.ListBoxCreateWidgetFunc | null,
        create_current_widget_func?: Gtk.ListBoxCreateWidgetFunc | null
    ): void;
    bind_name_model(model?: Gio.ListModel | null, get_name_func?: ComboRowGetNameFunc | null): void;
    get_model(): Gio.ListModel | null;
    get_selected_index(): number;
    get_use_subtitle(): boolean;
    set_for_enum(enum_type: GObject.GType, get_name_func?: ComboRowGetEnumValueNameFunc | null): void;
    set_get_name_func(get_name_func?: ComboRowGetNameFunc | null): void;
    set_selected_index(selected_index: number): void;
    set_use_subtitle(use_subtitle: boolean): void;
}
export module Deck {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;
        can_swipe_back: boolean;
        canSwipeBack: boolean;
        can_swipe_forward: boolean;
        canSwipeForward: boolean;
        hhomogeneous: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_running: boolean;
        transitionRunning: boolean;
        transition_type: DeckTransitionType;
        transitionType: DeckTransitionType;
        vhomogeneous: boolean;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        visible_child_name: string;
        visibleChildName: string;
    }
}
export class Deck extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
    static $gtype: GObject.GType<Deck>;

    constructor(properties?: Partial<Deck.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Deck.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get can_swipe_back(): boolean;
    set can_swipe_back(val: boolean);
    get canSwipeBack(): boolean;
    set canSwipeBack(val: boolean);
    get can_swipe_forward(): boolean;
    set can_swipe_forward(val: boolean);
    get canSwipeForward(): boolean;
    set canSwipeForward(val: boolean);
    get hhomogeneous(): boolean;
    set hhomogeneous(val: boolean);
    get interpolate_size(): boolean;
    set interpolate_size(val: boolean);
    get interpolateSize(): boolean;
    set interpolateSize(val: boolean);
    get transition_duration(): number;
    set transition_duration(val: number);
    get transitionDuration(): number;
    set transitionDuration(val: number);
    get transition_running(): boolean;
    get transitionRunning(): boolean;
    get transition_type(): DeckTransitionType;
    set transition_type(val: DeckTransitionType);
    get transitionType(): DeckTransitionType;
    set transitionType(val: DeckTransitionType);
    get vhomogeneous(): boolean;
    set vhomogeneous(val: boolean);
    get visible_child(): Gtk.Widget;
    set visible_child(val: Gtk.Widget);
    get visibleChild(): Gtk.Widget;
    set visibleChild(val: Gtk.Widget);
    get visible_child_name(): string;
    set visible_child_name(val: string);
    get visibleChildName(): string;
    set visibleChildName(val: string);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): Deck;

    // Members

    get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null;
    get_can_swipe_back(): boolean;
    get_can_swipe_forward(): boolean;
    get_child_by_name(name: string): Gtk.Widget | null;
    get_homogeneous(orientation: Gtk.Orientation): boolean;
    get_interpolate_size(): boolean;
    get_transition_duration(): number;
    get_transition_running(): boolean;
    get_transition_type(): DeckTransitionType;
    get_visible_child(): Gtk.Widget;
    get_visible_child_name(): string;
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void;
    navigate(direction: NavigationDirection): boolean;
    prepend(child: Gtk.Widget): void;
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void;
    set_can_swipe_back(can_swipe_back: boolean): void;
    set_can_swipe_forward(can_swipe_forward: boolean): void;
    set_homogeneous(orientation: Gtk.Orientation, homogeneous: boolean): void;
    set_interpolate_size(interpolate_size: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: DeckTransitionType): void;
    set_visible_child(visible_child: Gtk.Widget): void;
    set_visible_child_name(name: string): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
    emit_child_switched(index: number, duration: number): void;
    get_cancel_progress(): number;
    get_distance(): number;
    get_progress(): number;
    get_snap_points(): number[];
    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    get_swipe_tracker(): SwipeTracker;
    switch_child(index: number, duration: number): void;
    vfunc_get_cancel_progress(): number;
    vfunc_get_distance(): number;
    vfunc_get_progress(): number;
    vfunc_get_snap_points(): number[];
    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    vfunc_get_swipe_tracker(): SwipeTracker;
    vfunc_switch_child(index: number, duration: number): void;
}
export module EnumValueObject {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class EnumValueObject extends GObject.Object {
    static $gtype: GObject.GType<EnumValueObject>;

    constructor(properties?: Partial<EnumValueObject.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EnumValueObject.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](enum_value: GObject.EnumValue): EnumValueObject;

    // Members

    get_name(): string;
    get_nick(): string;
    get_value(): number;
}
export module ExpanderRow {
    export interface ConstructorProperties extends PreferencesRow.ConstructorProperties {
        [key: string]: any;
        enable_expansion: boolean;
        enableExpansion: boolean;
        expanded: boolean;
        icon_name: string;
        iconName: string;
        show_enable_switch: boolean;
        showEnableSwitch: boolean;
        subtitle: string;
        use_underline: boolean;
        useUnderline: boolean;
    }
}
export class ExpanderRow extends PreferencesRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<ExpanderRow>;

    constructor(properties?: Partial<ExpanderRow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ExpanderRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get enable_expansion(): boolean;
    set enable_expansion(val: boolean);
    get enableExpansion(): boolean;
    set enableExpansion(val: boolean);
    get expanded(): boolean;
    set expanded(val: boolean);
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get show_enable_switch(): boolean;
    set show_enable_switch(val: boolean);
    get showEnableSwitch(): boolean;
    set showEnableSwitch(val: boolean);
    get subtitle(): string;
    set subtitle(val: string);
    get use_underline(): boolean;
    set use_underline(val: boolean);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);

    // Constructors

    static ["new"](): ExpanderRow;

    // Members

    add_action(widget: Gtk.Widget): void;
    add_prefix(widget: Gtk.Widget): void;
    get_enable_expansion(): boolean;
    get_expanded(): boolean;
    get_icon_name(): string;
    get_show_enable_switch(): boolean;
    get_subtitle(): string | null;
    get_use_underline(): boolean;
    set_enable_expansion(enable_expansion: boolean): void;
    set_expanded(expanded: boolean): void;
    set_icon_name(icon_name: string): void;
    set_show_enable_switch(show_enable_switch: boolean): void;
    set_subtitle(subtitle?: string | null): void;
    set_use_underline(use_underline: boolean): void;
}
export module Flap {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;
        content: Gtk.Widget;
        flap: Gtk.Widget;
        flap_position: Gtk.PackType;
        flapPosition: Gtk.PackType;
        fold_duration: number;
        foldDuration: number;
        fold_policy: FlapFoldPolicy;
        foldPolicy: FlapFoldPolicy;
        folded: boolean;
        locked: boolean;
        modal: boolean;
        reveal_duration: number;
        revealDuration: number;
        reveal_flap: boolean;
        revealFlap: boolean;
        reveal_progress: number;
        revealProgress: number;
        separator: Gtk.Widget;
        swipe_to_close: boolean;
        swipeToClose: boolean;
        swipe_to_open: boolean;
        swipeToOpen: boolean;
        transition_type: FlapTransitionType;
        transitionType: FlapTransitionType;
    }
}
export class Flap extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
    static $gtype: GObject.GType<Flap>;

    constructor(properties?: Partial<Flap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Flap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get content(): Gtk.Widget;
    set content(val: Gtk.Widget);
    get flap(): Gtk.Widget;
    set flap(val: Gtk.Widget);
    get flap_position(): Gtk.PackType;
    set flap_position(val: Gtk.PackType);
    get flapPosition(): Gtk.PackType;
    set flapPosition(val: Gtk.PackType);
    get fold_duration(): number;
    set fold_duration(val: number);
    get foldDuration(): number;
    set foldDuration(val: number);
    get fold_policy(): FlapFoldPolicy;
    set fold_policy(val: FlapFoldPolicy);
    get foldPolicy(): FlapFoldPolicy;
    set foldPolicy(val: FlapFoldPolicy);
    get folded(): boolean;
    get locked(): boolean;
    set locked(val: boolean);
    get modal(): boolean;
    set modal(val: boolean);
    get reveal_duration(): number;
    set reveal_duration(val: number);
    get revealDuration(): number;
    set revealDuration(val: number);
    get reveal_flap(): boolean;
    set reveal_flap(val: boolean);
    get revealFlap(): boolean;
    set revealFlap(val: boolean);
    get reveal_progress(): number;
    get revealProgress(): number;
    get separator(): Gtk.Widget;
    set separator(val: Gtk.Widget);
    get swipe_to_close(): boolean;
    set swipe_to_close(val: boolean);
    get swipeToClose(): boolean;
    set swipeToClose(val: boolean);
    get swipe_to_open(): boolean;
    set swipe_to_open(val: boolean);
    get swipeToOpen(): boolean;
    set swipeToOpen(val: boolean);
    get transition_type(): FlapTransitionType;
    set transition_type(val: FlapTransitionType);
    get transitionType(): FlapTransitionType;
    set transitionType(val: FlapTransitionType);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): Flap;

    // Members

    get_content(): Gtk.Widget | null;
    get_flap(): Gtk.Widget | null;
    get_flap_position(): Gtk.PackType;
    get_fold_duration(): number;
    get_fold_policy(): FlapFoldPolicy;
    get_folded(): boolean;
    get_locked(): boolean;
    get_modal(): boolean;
    get_reveal_duration(): number;
    get_reveal_flap(): boolean;
    get_reveal_progress(): number;
    get_separator(): Gtk.Widget | null;
    get_swipe_to_close(): boolean;
    get_swipe_to_open(): boolean;
    get_transition_type(): FlapTransitionType;
    set_content(content?: Gtk.Widget | null): void;
    set_flap(flap?: Gtk.Widget | null): void;
    set_flap_position(position: Gtk.PackType): void;
    set_fold_duration(duration: number): void;
    set_fold_policy(policy: FlapFoldPolicy): void;
    set_locked(locked: boolean): void;
    set_modal(modal: boolean): void;
    set_reveal_duration(duration: number): void;
    set_reveal_flap(reveal_flap: boolean): void;
    set_separator(separator?: Gtk.Widget | null): void;
    set_swipe_to_close(swipe_to_close: boolean): void;
    set_swipe_to_open(swipe_to_open: boolean): void;
    set_transition_type(transition_type: FlapTransitionType): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
    emit_child_switched(index: number, duration: number): void;
    get_cancel_progress(): number;
    get_distance(): number;
    get_progress(): number;
    get_snap_points(): number[];
    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    get_swipe_tracker(): SwipeTracker;
    switch_child(index: number, duration: number): void;
    vfunc_get_cancel_progress(): number;
    vfunc_get_distance(): number;
    vfunc_get_progress(): number;
    vfunc_get_snap_points(): number[];
    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    vfunc_get_swipe_tracker(): SwipeTracker;
    vfunc_switch_child(index: number, duration: number): void;
}
export module HeaderBar {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;
        centering_policy: CenteringPolicy;
        centeringPolicy: CenteringPolicy;
        custom_title: Gtk.Widget;
        customTitle: Gtk.Widget;
        decoration_layout: string;
        decorationLayout: string;
        decoration_layout_set: boolean;
        decorationLayoutSet: boolean;
        has_subtitle: boolean;
        hasSubtitle: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        show_close_button: boolean;
        showCloseButton: boolean;
        spacing: number;
        subtitle: string;
        title: string;
        transition_duration: number;
        transitionDuration: number;
        transition_running: boolean;
        transitionRunning: boolean;
    }
}
export class HeaderBar extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<HeaderBar>;

    constructor(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get centering_policy(): CenteringPolicy;
    set centering_policy(val: CenteringPolicy);
    get centeringPolicy(): CenteringPolicy;
    set centeringPolicy(val: CenteringPolicy);
    get custom_title(): Gtk.Widget;
    set custom_title(val: Gtk.Widget);
    get customTitle(): Gtk.Widget;
    set customTitle(val: Gtk.Widget);
    get decoration_layout(): string;
    set decoration_layout(val: string);
    get decorationLayout(): string;
    set decorationLayout(val: string);
    get decoration_layout_set(): boolean;
    set decoration_layout_set(val: boolean);
    get decorationLayoutSet(): boolean;
    set decorationLayoutSet(val: boolean);
    get has_subtitle(): boolean;
    set has_subtitle(val: boolean);
    get hasSubtitle(): boolean;
    set hasSubtitle(val: boolean);
    get interpolate_size(): boolean;
    set interpolate_size(val: boolean);
    get interpolateSize(): boolean;
    set interpolateSize(val: boolean);
    get show_close_button(): boolean;
    set show_close_button(val: boolean);
    get showCloseButton(): boolean;
    set showCloseButton(val: boolean);
    get spacing(): number;
    set spacing(val: number);
    get subtitle(): string;
    set subtitle(val: string);
    get title(): string;
    set title(val: string);
    get transition_duration(): number;
    set transition_duration(val: number);
    get transitionDuration(): number;
    set transitionDuration(val: number);
    get transition_running(): boolean;
    get transitionRunning(): boolean;

    // Constructors

    static ["new"](): HeaderBar;

    // Members

    get_centering_policy(): CenteringPolicy;
    get_custom_title(): Gtk.Widget | null;
    get_decoration_layout(): string;
    get_has_subtitle(): boolean;
    get_interpolate_size(): boolean;
    get_show_close_button(): boolean;
    get_subtitle(): string | null;
    get_title(): string | null;
    get_transition_duration(): number;
    get_transition_running(): boolean;
    pack_end(child: Gtk.Widget): void;
    pack_start(child: Gtk.Widget): void;
    set_centering_policy(centering_policy: CenteringPolicy): void;
    set_custom_title(title_widget?: Gtk.Widget | null): void;
    set_decoration_layout(layout?: string | null): void;
    set_has_subtitle(setting: boolean): void;
    set_interpolate_size(interpolate_size: boolean): void;
    set_show_close_button(setting: boolean): void;
    set_subtitle(subtitle?: string | null): void;
    set_title(title?: string | null): void;
    set_transition_duration(duration: number): void;
}
export module HeaderGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        decorate_all: boolean;
        decorateAll: boolean;
    }
}
export class HeaderGroup extends GObject.Object implements Gtk.Buildable {
    static $gtype: GObject.GType<HeaderGroup>;

    constructor(properties?: Partial<HeaderGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HeaderGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get decorate_all(): boolean;
    set decorate_all(val: boolean);
    get decorateAll(): boolean;
    set decorateAll(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "update-decoration-layouts", callback: (_source: this) => void): number;
    connect_after(signal: "update-decoration-layouts", callback: (_source: this) => void): number;
    emit(signal: "update-decoration-layouts"): void;

    // Constructors

    static ["new"](): HeaderGroup;

    // Members

    add_gtk_header_bar(header_bar: Gtk.HeaderBar): void;
    add_header_bar(header_bar: HeaderBar): void;
    add_header_group(header_group: HeaderGroup): void;
    get_children(): HeaderGroupChild[];
    get_decorate_all(): boolean;
    remove_child(child: HeaderGroupChild): void;
    remove_gtk_header_bar(header_bar: Gtk.HeaderBar): void;
    remove_header_bar(header_bar: HeaderBar): void;
    remove_header_group(header_group: HeaderGroup): void;
    set_decorate_all(decorate_all: boolean): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Gtk.Builder): void;
    set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module HeaderGroupChild {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class HeaderGroupChild extends GObject.Object {
    static $gtype: GObject.GType<HeaderGroupChild>;

    constructor(properties?: Partial<HeaderGroupChild.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HeaderGroupChild.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_child_type(): HeaderGroupChildType;
    get_gtk_header_bar(): Gtk.HeaderBar;
    get_header_bar(): HeaderBar;
    get_header_group(): HeaderGroup;
}
export module Keypad {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        column_spacing: number;
        columnSpacing: number;
        end_action: Gtk.Widget;
        endAction: Gtk.Widget;
        entry: Gtk.Entry;
        letters_visible: boolean;
        lettersVisible: boolean;
        row_spacing: number;
        rowSpacing: number;
        start_action: Gtk.Widget;
        startAction: Gtk.Widget;
        symbols_visible: boolean;
        symbolsVisible: boolean;
    }
}
export class Keypad extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Keypad>;

    constructor(properties?: Partial<Keypad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Keypad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get column_spacing(): number;
    set column_spacing(val: number);
    get columnSpacing(): number;
    set columnSpacing(val: number);
    get end_action(): Gtk.Widget;
    set end_action(val: Gtk.Widget);
    get endAction(): Gtk.Widget;
    set endAction(val: Gtk.Widget);
    get entry(): Gtk.Entry;
    set entry(val: Gtk.Entry);
    get letters_visible(): boolean;
    set letters_visible(val: boolean);
    get lettersVisible(): boolean;
    set lettersVisible(val: boolean);
    get row_spacing(): number;
    set row_spacing(val: number);
    get rowSpacing(): number;
    set rowSpacing(val: number);
    get start_action(): Gtk.Widget;
    set start_action(val: Gtk.Widget);
    get startAction(): Gtk.Widget;
    set startAction(val: Gtk.Widget);
    get symbols_visible(): boolean;
    set symbols_visible(val: boolean);
    get symbolsVisible(): boolean;
    set symbolsVisible(val: boolean);

    // Constructors

    static ["new"](symbols_visible: boolean, letters_visible: boolean): Keypad;

    // Members

    get_column_spacing(): number;
    get_end_action(): Gtk.Widget | null;
    get_entry(): Gtk.Entry;
    get_letters_visible(): boolean;
    get_row_spacing(): number;
    get_start_action(): Gtk.Widget | null;
    get_symbols_visible(): boolean;
    set_column_spacing(spacing: number): void;
    set_end_action(end_action?: Gtk.Widget | null): void;
    set_entry(entry?: Gtk.Entry | null): void;
    set_letters_visible(letters_visible: boolean): void;
    set_row_spacing(spacing: number): void;
    set_start_action(start_action?: Gtk.Widget | null): void;
    set_symbols_visible(symbols_visible: boolean): void;
}
export module Leaflet {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;
        can_swipe_back: boolean;
        canSwipeBack: boolean;
        can_swipe_forward: boolean;
        canSwipeForward: boolean;
        child_transition_duration: number;
        childTransitionDuration: number;
        child_transition_running: boolean;
        childTransitionRunning: boolean;
        folded: boolean;
        hhomogeneous_folded: boolean;
        hhomogeneousFolded: boolean;
        hhomogeneous_unfolded: boolean;
        hhomogeneousUnfolded: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        mode_transition_duration: number;
        modeTransitionDuration: number;
        transition_type: LeafletTransitionType;
        transitionType: LeafletTransitionType;
        vhomogeneous_folded: boolean;
        vhomogeneousFolded: boolean;
        vhomogeneous_unfolded: boolean;
        vhomogeneousUnfolded: boolean;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        visible_child_name: string;
        visibleChildName: string;
    }
}
export class Leaflet extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
    static $gtype: GObject.GType<Leaflet>;

    constructor(properties?: Partial<Leaflet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Leaflet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get can_swipe_back(): boolean;
    set can_swipe_back(val: boolean);
    get canSwipeBack(): boolean;
    set canSwipeBack(val: boolean);
    get can_swipe_forward(): boolean;
    set can_swipe_forward(val: boolean);
    get canSwipeForward(): boolean;
    set canSwipeForward(val: boolean);
    get child_transition_duration(): number;
    set child_transition_duration(val: number);
    get childTransitionDuration(): number;
    set childTransitionDuration(val: number);
    get child_transition_running(): boolean;
    get childTransitionRunning(): boolean;
    get folded(): boolean;
    get hhomogeneous_folded(): boolean;
    set hhomogeneous_folded(val: boolean);
    get hhomogeneousFolded(): boolean;
    set hhomogeneousFolded(val: boolean);
    get hhomogeneous_unfolded(): boolean;
    set hhomogeneous_unfolded(val: boolean);
    get hhomogeneousUnfolded(): boolean;
    set hhomogeneousUnfolded(val: boolean);
    get interpolate_size(): boolean;
    set interpolate_size(val: boolean);
    get interpolateSize(): boolean;
    set interpolateSize(val: boolean);
    get mode_transition_duration(): number;
    set mode_transition_duration(val: number);
    get modeTransitionDuration(): number;
    set modeTransitionDuration(val: number);
    get transition_type(): LeafletTransitionType;
    set transition_type(val: LeafletTransitionType);
    get transitionType(): LeafletTransitionType;
    set transitionType(val: LeafletTransitionType);
    get vhomogeneous_folded(): boolean;
    set vhomogeneous_folded(val: boolean);
    get vhomogeneousFolded(): boolean;
    set vhomogeneousFolded(val: boolean);
    get vhomogeneous_unfolded(): boolean;
    set vhomogeneous_unfolded(val: boolean);
    get vhomogeneousUnfolded(): boolean;
    set vhomogeneousUnfolded(val: boolean);
    get visible_child(): Gtk.Widget;
    set visible_child(val: Gtk.Widget);
    get visibleChild(): Gtk.Widget;
    set visibleChild(val: Gtk.Widget);
    get visible_child_name(): string;
    set visible_child_name(val: string);
    get visibleChildName(): string;
    set visibleChildName(val: string);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): Leaflet;

    // Members

    get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null;
    get_can_swipe_back(): boolean;
    get_can_swipe_forward(): boolean;
    get_child_by_name(name: string): Gtk.Widget | null;
    get_child_transition_duration(): number;
    get_child_transition_running(): boolean;
    get_folded(): boolean;
    get_homogeneous(folded: boolean, orientation: Gtk.Orientation): boolean;
    get_interpolate_size(): boolean;
    get_mode_transition_duration(): number;
    get_transition_type(): LeafletTransitionType;
    get_visible_child(): Gtk.Widget;
    get_visible_child_name(): string;
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void;
    navigate(direction: NavigationDirection): boolean;
    prepend(child: Gtk.Widget): void;
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void;
    set_can_swipe_back(can_swipe_back: boolean): void;
    set_can_swipe_forward(can_swipe_forward: boolean): void;
    set_child_transition_duration(duration: number): void;
    set_homogeneous(folded: boolean, orientation: Gtk.Orientation, homogeneous: boolean): void;
    set_interpolate_size(interpolate_size: boolean): void;
    set_mode_transition_duration(duration: number): void;
    set_transition_type(transition: LeafletTransitionType): void;
    set_visible_child(visible_child: Gtk.Widget): void;
    set_visible_child_name(name: string): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
    emit_child_switched(index: number, duration: number): void;
    get_cancel_progress(): number;
    get_distance(): number;
    get_progress(): number;
    get_snap_points(): number[];
    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    get_swipe_tracker(): SwipeTracker;
    switch_child(index: number, duration: number): void;
    vfunc_get_cancel_progress(): number;
    vfunc_get_distance(): number;
    vfunc_get_progress(): number;
    vfunc_get_snap_points(): number[];
    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    vfunc_get_swipe_tracker(): SwipeTracker;
    vfunc_switch_child(index: number, duration: number): void;
}
export module PreferencesGroup {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        description: string;
        title: string;
        use_markup: boolean;
        useMarkup: boolean;
    }
}
export class PreferencesGroup extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesGroup>;

    constructor(properties?: Partial<PreferencesGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PreferencesGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get description(): string;
    set description(val: string);
    get title(): string;
    set title(val: string);
    get use_markup(): boolean;
    set use_markup(val: boolean);
    get useMarkup(): boolean;
    set useMarkup(val: boolean);

    // Constructors

    static ["new"](): PreferencesGroup;

    // Members

    get_description(): string;
    get_title(): string;
    get_use_markup(): boolean;
    set_description(description: string): void;
    set_title(title: string): void;
    set_use_markup(use_markup: boolean): void;
}
export module PreferencesPage {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        icon_name: string;
        iconName: string;
        title: string;
    }
}
export class PreferencesPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesPage>;

    constructor(properties?: Partial<PreferencesPage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PreferencesPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get title(): string;
    set title(val: string);

    // Constructors

    static ["new"](): PreferencesPage;

    // Members

    get_icon_name(): string | null;
    get_title(): string | null;
    set_icon_name(icon_name?: string | null): void;
    set_title(title?: string | null): void;
}
export module PreferencesRow {
    export interface ConstructorProperties extends Gtk.ListBoxRow.ConstructorProperties {
        [key: string]: any;
        title: string;
        use_underline: boolean;
        useUnderline: boolean;
    }
}
export class PreferencesRow extends Gtk.ListBoxRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesRow>;

    constructor(properties?: Partial<PreferencesRow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PreferencesRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get title(): string;
    set title(val: string);
    get use_underline(): boolean;
    set use_underline(val: boolean);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);

    // Implemented Properties

    get action_name(): string;
    set action_name(val: string);
    get actionName(): string;
    set actionName(val: string);
    get action_target(): GLib.Variant;
    set action_target(val: GLib.Variant);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);

    // Constructors

    static ["new"](): PreferencesRow;

    // Members

    get_title(): string | null;
    get_use_underline(): boolean;
    set_title(title?: string | null): void;
    set_use_underline(use_underline: boolean): void;

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
}
export module PreferencesWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        can_swipe_back: boolean;
        canSwipeBack: boolean;
        search_enabled: boolean;
        searchEnabled: boolean;
    }
}
export class PreferencesWindow extends Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesWindow>;

    constructor(properties?: Partial<PreferencesWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PreferencesWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get can_swipe_back(): boolean;
    set can_swipe_back(val: boolean);
    get canSwipeBack(): boolean;
    set canSwipeBack(val: boolean);
    get search_enabled(): boolean;
    set search_enabled(val: boolean);
    get searchEnabled(): boolean;
    set searchEnabled(val: boolean);

    // Constructors

    static ["new"](): PreferencesWindow;

    // Members

    close_subpage(): void;
    get_can_swipe_back(): boolean;
    get_search_enabled(): boolean;
    present_subpage(subpage: Gtk.Widget): void;
    set_can_swipe_back(can_swipe_back: boolean): void;
    set_search_enabled(search_enabled: boolean): void;
}
export module SearchBar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        search_mode_enabled: boolean;
        searchModeEnabled: boolean;
        show_close_button: boolean;
        showCloseButton: boolean;
    }
}
export class SearchBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<SearchBar>;

    constructor(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get search_mode_enabled(): boolean;
    set search_mode_enabled(val: boolean);
    get searchModeEnabled(): boolean;
    set searchModeEnabled(val: boolean);
    get show_close_button(): boolean;
    set show_close_button(val: boolean);
    get showCloseButton(): boolean;
    set showCloseButton(val: boolean);

    // Constructors

    static ["new"](): SearchBar;

    // Members

    connect_entry(entry: Gtk.Entry): void;
    get_search_mode(): boolean;
    get_show_close_button(): boolean;
    handle_event(event: Gdk.Event): boolean;
    set_search_mode(search_mode: boolean): void;
    set_show_close_button(visible: boolean): void;
}
export module Squeezer {
    export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
        [key: string]: any;
        homogeneous: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_running: boolean;
        transitionRunning: boolean;
        transition_type: SqueezerTransitionType;
        transitionType: SqueezerTransitionType;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        xalign: number;
        yalign: number;
    }
}
export class Squeezer extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
    static $gtype: GObject.GType<Squeezer>;

    constructor(properties?: Partial<Squeezer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Squeezer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get homogeneous(): boolean;
    set homogeneous(val: boolean);
    get interpolate_size(): boolean;
    set interpolate_size(val: boolean);
    get interpolateSize(): boolean;
    set interpolateSize(val: boolean);
    get transition_duration(): number;
    set transition_duration(val: number);
    get transitionDuration(): number;
    set transitionDuration(val: number);
    get transition_running(): boolean;
    get transitionRunning(): boolean;
    get transition_type(): SqueezerTransitionType;
    set transition_type(val: SqueezerTransitionType);
    get transitionType(): SqueezerTransitionType;
    set transitionType(val: SqueezerTransitionType);
    get visible_child(): Gtk.Widget;
    get visibleChild(): Gtk.Widget;
    get xalign(): number;
    set xalign(val: number);
    get yalign(): number;
    set yalign(val: number);

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](): Squeezer;

    // Members

    get_child_enabled(child: Gtk.Widget): boolean;
    get_homogeneous(): boolean;
    get_interpolate_size(): boolean;
    get_transition_duration(): number;
    get_transition_running(): boolean;
    get_transition_type(): SqueezerTransitionType;
    get_visible_child(): Gtk.Widget | null;
    get_xalign(): number;
    get_yalign(): number;
    set_child_enabled(child: Gtk.Widget, enabled: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_interpolate_size(interpolate_size: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: SqueezerTransitionType): void;
    set_xalign(xalign: number): void;
    set_yalign(yalign: number): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module StatusPage {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        description: string;
        icon_name: string;
        iconName: string;
        title: string;
    }
}
export class StatusPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<StatusPage>;

    constructor(properties?: Partial<StatusPage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get description(): string;
    set description(val: string);
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get title(): string;
    set title(val: string);

    // Constructors

    static ["new"](): StatusPage;

    // Members

    get_description(): string | null;
    get_icon_name(): string | null;
    get_title(): string | null;
    set_description(description?: string | null): void;
    set_icon_name(icon_name?: string | null): void;
    set_title(title?: string | null): void;
}
export module StyleManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        color_scheme: ColorScheme;
        colorScheme: ColorScheme;
        dark: boolean;
        display: Gdk.Display;
        high_contrast: boolean;
        highContrast: boolean;
        system_supports_color_schemes: boolean;
        systemSupportsColorSchemes: boolean;
    }
}
export class StyleManager extends GObject.Object {
    static $gtype: GObject.GType<StyleManager>;

    constructor(properties?: Partial<StyleManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get color_scheme(): ColorScheme;
    set color_scheme(val: ColorScheme);
    get colorScheme(): ColorScheme;
    set colorScheme(val: ColorScheme);
    get dark(): boolean;
    get display(): Gdk.Display;
    get high_contrast(): boolean;
    get highContrast(): boolean;
    get system_supports_color_schemes(): boolean;
    get systemSupportsColorSchemes(): boolean;

    // Members

    get_color_scheme(): ColorScheme;
    get_dark(): boolean;
    get_display(): Gdk.Display;
    get_high_contrast(): boolean;
    get_system_supports_color_schemes(): boolean;
    set_color_scheme(color_scheme: ColorScheme): void;
    static get_default(): StyleManager;
    static get_for_display(display: Gdk.Display): StyleManager;
}
export module SwipeGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SwipeGroup extends GObject.Object implements Gtk.Buildable {
    static $gtype: GObject.GType<SwipeGroup>;

    constructor(properties?: Partial<SwipeGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SwipeGroup.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SwipeGroup;

    // Members

    add_swipeable(swipeable: Swipeable): void;
    get_swipeables(): Swipeable[];
    remove_swipeable(swipeable: Swipeable): void;

    // Implemented Members

    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Gtk.Builder): void;
    set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Gtk.Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module SwipeTracker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        allow_long_swipes: boolean;
        allowLongSwipes: boolean;
        allow_mouse_drag: boolean;
        allowMouseDrag: boolean;
        enabled: boolean;
        reversed: boolean;
        swipeable: Swipeable;
    }
}
export class SwipeTracker extends GObject.Object implements Gtk.Orientable {
    static $gtype: GObject.GType<SwipeTracker>;

    constructor(properties?: Partial<SwipeTracker.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SwipeTracker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get allow_long_swipes(): boolean;
    set allow_long_swipes(val: boolean);
    get allowLongSwipes(): boolean;
    set allowLongSwipes(val: boolean);
    get allow_mouse_drag(): boolean;
    set allow_mouse_drag(val: boolean);
    get allowMouseDrag(): boolean;
    set allowMouseDrag(val: boolean);
    get enabled(): boolean;
    set enabled(val: boolean);
    get reversed(): boolean;
    set reversed(val: boolean);
    get swipeable(): Swipeable;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "begin-swipe",
        callback: (_source: this, direction: NavigationDirection, direct: boolean) => void
    ): number;
    connect_after(
        signal: "begin-swipe",
        callback: (_source: this, direction: NavigationDirection, direct: boolean) => void
    ): number;
    emit(signal: "begin-swipe", direction: NavigationDirection, direct: boolean): void;
    connect(signal: "end-swipe", callback: (_source: this, duration: number, to: number) => void): number;
    connect_after(signal: "end-swipe", callback: (_source: this, duration: number, to: number) => void): number;
    emit(signal: "end-swipe", duration: number, to: number): void;
    connect(signal: "update-swipe", callback: (_source: this, progress: number) => void): number;
    connect_after(signal: "update-swipe", callback: (_source: this, progress: number) => void): number;
    emit(signal: "update-swipe", progress: number): void;

    // Implemented Properties

    get orientation(): Gtk.Orientation;
    set orientation(val: Gtk.Orientation);

    // Constructors

    static ["new"](swipeable: Swipeable): SwipeTracker;

    // Members

    get_allow_long_swipes(): boolean;
    get_allow_mouse_drag(): boolean;
    get_enabled(): boolean;
    get_reversed(): boolean;
    get_swipeable(): Swipeable;
    set_allow_long_swipes(allow_long_swipes: boolean): void;
    set_allow_mouse_drag(allow_mouse_drag: boolean): void;
    set_enabled(enabled: boolean): void;
    set_reversed(reversed: boolean): void;
    shift_position(delta: number): void;

    // Implemented Members

    get_orientation(): Gtk.Orientation;
    set_orientation(orientation: Gtk.Orientation): void;
}
export module TabBar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        autohide: boolean;
        end_action_widget: Gtk.Widget;
        endActionWidget: Gtk.Widget;
        expand_tabs: boolean;
        expandTabs: boolean;
        extra_drag_dest_targets: Gtk.TargetList;
        extraDragDestTargets: Gtk.TargetList;
        inverted: boolean;
        is_overflowing: boolean;
        isOverflowing: boolean;
        start_action_widget: Gtk.Widget;
        startActionWidget: Gtk.Widget;
        tabs_revealed: boolean;
        tabsRevealed: boolean;
        view: TabView;
    }
}
export class TabBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<TabBar>;

    constructor(properties?: Partial<TabBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TabBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get autohide(): boolean;
    set autohide(val: boolean);
    get end_action_widget(): Gtk.Widget;
    set end_action_widget(val: Gtk.Widget);
    get endActionWidget(): Gtk.Widget;
    set endActionWidget(val: Gtk.Widget);
    get expand_tabs(): boolean;
    set expand_tabs(val: boolean);
    get expandTabs(): boolean;
    set expandTabs(val: boolean);
    get extra_drag_dest_targets(): Gtk.TargetList;
    set extra_drag_dest_targets(val: Gtk.TargetList);
    get extraDragDestTargets(): Gtk.TargetList;
    set extraDragDestTargets(val: Gtk.TargetList);
    get inverted(): boolean;
    set inverted(val: boolean);
    get is_overflowing(): boolean;
    get isOverflowing(): boolean;
    get start_action_widget(): Gtk.Widget;
    set start_action_widget(val: Gtk.Widget);
    get startActionWidget(): Gtk.Widget;
    set startActionWidget(val: Gtk.Widget);
    get tabs_revealed(): boolean;
    get tabsRevealed(): boolean;
    get view(): TabView;
    set view(val: TabView);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "extra-drag-data-received",
        callback: (
            _source: this,
            page: TabPage,
            context: Gdk.DragContext,
            data: Gtk.SelectionData,
            info: number,
            time: number
        ) => void
    ): number;
    connect_after(
        signal: "extra-drag-data-received",
        callback: (
            _source: this,
            page: TabPage,
            context: Gdk.DragContext,
            data: Gtk.SelectionData,
            info: number,
            time: number
        ) => void
    ): number;
    emit(
        signal: "extra-drag-data-received",
        page: TabPage,
        context: Gdk.DragContext,
        data: Gtk.SelectionData,
        info: number,
        time: number
    ): void;

    // Constructors

    static ["new"](): TabBar;

    // Members

    get_autohide(): boolean;
    get_end_action_widget(): Gtk.Widget | null;
    get_expand_tabs(): boolean;
    get_extra_drag_dest_targets(): Gtk.TargetList | null;
    get_inverted(): boolean;
    get_is_overflowing(): boolean;
    get_start_action_widget(): Gtk.Widget | null;
    get_tabs_revealed(): boolean;
    get_view(): TabView | null;
    set_autohide(autohide: boolean): void;
    set_end_action_widget(widget?: Gtk.Widget | null): void;
    set_expand_tabs(expand_tabs: boolean): void;
    set_extra_drag_dest_targets(extra_drag_dest_targets?: Gtk.TargetList | null): void;
    set_inverted(inverted: boolean): void;
    set_start_action_widget(widget?: Gtk.Widget | null): void;
    set_view(view?: TabView | null): void;
}
export module TabPage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        child: Gtk.Widget;
        icon: Gio.Icon;
        indicator_activatable: boolean;
        indicatorActivatable: boolean;
        indicator_icon: Gio.Icon;
        indicatorIcon: Gio.Icon;
        loading: boolean;
        needs_attention: boolean;
        needsAttention: boolean;
        pinned: boolean;
        selected: boolean;
        title: string;
        tooltip: string;
    }
}
export class TabPage extends GObject.Object {
    static $gtype: GObject.GType<TabPage>;

    constructor(properties?: Partial<TabPage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TabPage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get child(): Gtk.Widget;
    get icon(): Gio.Icon;
    set icon(val: Gio.Icon);
    get indicator_activatable(): boolean;
    set indicator_activatable(val: boolean);
    get indicatorActivatable(): boolean;
    set indicatorActivatable(val: boolean);
    get indicator_icon(): Gio.Icon;
    set indicator_icon(val: Gio.Icon);
    get indicatorIcon(): Gio.Icon;
    set indicatorIcon(val: Gio.Icon);
    get loading(): boolean;
    set loading(val: boolean);
    get needs_attention(): boolean;
    set needs_attention(val: boolean);
    get needsAttention(): boolean;
    set needsAttention(val: boolean);
    get pinned(): boolean;
    get selected(): boolean;
    get title(): string;
    set title(val: string);
    get tooltip(): string;
    set tooltip(val: string);

    // Members

    get_child(): Gtk.Widget;
    get_icon(): Gio.Icon | null;
    get_indicator_activatable(): boolean;
    get_indicator_icon(): Gio.Icon | null;
    get_loading(): boolean;
    get_needs_attention(): boolean;
    get_parent(): TabPage | null;
    get_pinned(): boolean;
    get_selected(): boolean;
    get_title(): string | null;
    get_tooltip(): string | null;
    set_icon(icon?: Gio.Icon | null): void;
    set_indicator_activatable(activatable: boolean): void;
    set_indicator_icon(indicator_icon?: Gio.Icon | null): void;
    set_loading(loading: boolean): void;
    set_needs_attention(needs_attention: boolean): void;
    set_title(title?: string | null): void;
    set_tooltip(tooltip?: string | null): void;
}
export module TabView {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        default_icon: Gio.Icon;
        defaultIcon: Gio.Icon;
        is_transferring_page: boolean;
        isTransferringPage: boolean;
        menu_model: Gio.MenuModel;
        menuModel: Gio.MenuModel;
        n_pages: number;
        nPages: number;
        n_pinned_pages: number;
        nPinnedPages: number;
        selected_page: TabPage;
        selectedPage: TabPage;
        shortcut_widget: Gtk.Widget;
        shortcutWidget: Gtk.Widget;
    }
}
export class TabView extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<TabView>;

    constructor(properties?: Partial<TabView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TabView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get default_icon(): Gio.Icon;
    set default_icon(val: Gio.Icon);
    get defaultIcon(): Gio.Icon;
    set defaultIcon(val: Gio.Icon);
    get is_transferring_page(): boolean;
    get isTransferringPage(): boolean;
    get menu_model(): Gio.MenuModel;
    set menu_model(val: Gio.MenuModel);
    get menuModel(): Gio.MenuModel;
    set menuModel(val: Gio.MenuModel);
    get n_pages(): number;
    get nPages(): number;
    get n_pinned_pages(): number;
    get nPinnedPages(): number;
    get selected_page(): TabPage;
    set selected_page(val: TabPage);
    get selectedPage(): TabPage;
    set selectedPage(val: TabPage);
    get shortcut_widget(): Gtk.Widget;
    set shortcut_widget(val: Gtk.Widget);
    get shortcutWidget(): Gtk.Widget;
    set shortcutWidget(val: Gtk.Widget);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close-page", callback: (_source: this, page: TabPage) => boolean): number;
    connect_after(signal: "close-page", callback: (_source: this, page: TabPage) => boolean): number;
    emit(signal: "close-page", page: TabPage): void;
    connect(signal: "create-window", callback: (_source: this) => TabView | null): number;
    connect_after(signal: "create-window", callback: (_source: this) => TabView | null): number;
    emit(signal: "create-window"): void;
    connect(signal: "indicator-activated", callback: (_source: this, page: TabPage) => void): number;
    connect_after(signal: "indicator-activated", callback: (_source: this, page: TabPage) => void): number;
    emit(signal: "indicator-activated", page: TabPage): void;
    connect(signal: "page-attached", callback: (_source: this, page: TabPage, position: number) => void): number;
    connect_after(signal: "page-attached", callback: (_source: this, page: TabPage, position: number) => void): number;
    emit(signal: "page-attached", page: TabPage, position: number): void;
    connect(signal: "page-detached", callback: (_source: this, page: TabPage, position: number) => void): number;
    connect_after(signal: "page-detached", callback: (_source: this, page: TabPage, position: number) => void): number;
    emit(signal: "page-detached", page: TabPage, position: number): void;
    connect(signal: "page-reordered", callback: (_source: this, page: TabPage, position: number) => void): number;
    connect_after(signal: "page-reordered", callback: (_source: this, page: TabPage, position: number) => void): number;
    emit(signal: "page-reordered", page: TabPage, position: number): void;
    connect(signal: "setup-menu", callback: (_source: this, page: TabPage) => void): number;
    connect_after(signal: "setup-menu", callback: (_source: this, page: TabPage) => void): number;
    emit(signal: "setup-menu", page: TabPage): void;

    // Constructors

    static ["new"](): TabView;

    // Members

    add_page(child: Gtk.Widget, parent?: TabPage | null): TabPage;
    append(child: Gtk.Widget): TabPage;
    append_pinned(child: Gtk.Widget): TabPage;
    close_other_pages(page: TabPage): void;
    close_page(page: TabPage): void;
    close_page_finish(page: TabPage, confirm: boolean): void;
    close_pages_after(page: TabPage): void;
    close_pages_before(page: TabPage): void;
    get_default_icon(): Gio.Icon;
    get_is_transferring_page(): boolean;
    get_menu_model(): Gio.MenuModel | null;
    get_n_pages(): number;
    get_n_pinned_pages(): number;
    get_nth_page(position: number): TabPage;
    get_page(child: Gtk.Widget): TabPage;
    get_page_position(page: TabPage): number;
    get_pages(): Gio.ListModel;
    get_selected_page(): TabPage | null;
    get_shortcut_widget(): Gtk.Widget | null;
    insert(child: Gtk.Widget, position: number): TabPage;
    insert_pinned(child: Gtk.Widget, position: number): TabPage;
    prepend(child: Gtk.Widget): TabPage;
    prepend_pinned(child: Gtk.Widget): TabPage;
    reorder_backward(page: TabPage): boolean;
    reorder_first(page: TabPage): boolean;
    reorder_forward(page: TabPage): boolean;
    reorder_last(page: TabPage): boolean;
    reorder_page(page: TabPage, position: number): boolean;
    select_next_page(): boolean;
    select_previous_page(): boolean;
    set_default_icon(default_icon: Gio.Icon): void;
    set_menu_model(menu_model?: Gio.MenuModel | null): void;
    set_page_pinned(page: TabPage, pinned: boolean): void;
    set_selected_page(selected_page: TabPage): void;
    set_shortcut_widget(widget?: Gtk.Widget | null): void;
    transfer_page(page: TabPage, other_view: TabView, position: number): void;
}
export module TitleBar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        selection_mode: boolean;
        selectionMode: boolean;
    }
}
export class TitleBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<TitleBar>;

    constructor(properties?: Partial<TitleBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TitleBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get selection_mode(): boolean;
    set selection_mode(val: boolean);
    get selectionMode(): boolean;
    set selectionMode(val: boolean);

    // Constructors

    static ["new"](): TitleBar;

    // Members

    get_selection_mode(): boolean;
    set_selection_mode(selection_mode: boolean): void;
}
export module ValueObject {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        value: GObject.Value;
    }
}
export class ValueObject extends GObject.Object {
    static $gtype: GObject.GType<ValueObject>;

    constructor(properties?: Partial<ValueObject.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ValueObject.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get value(): GObject.Value;

    // Constructors

    static ["new"](value: GObject.Value | any): ValueObject;

    // Members

    copy_value(dest: GObject.Value | any): void;
    dup_string(): string;
    get_string(): string;
    get_value(): unknown;
}
export module ViewSwitcher {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        narrow_ellipsize: Pango.EllipsizeMode;
        narrowEllipsize: Pango.EllipsizeMode;
        policy: ViewSwitcherPolicy;
        stack: Gtk.Stack;
    }
}
export class ViewSwitcher extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ViewSwitcher>;

    constructor(properties?: Partial<ViewSwitcher.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ViewSwitcher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get narrow_ellipsize(): Pango.EllipsizeMode;
    set narrow_ellipsize(val: Pango.EllipsizeMode);
    get narrowEllipsize(): Pango.EllipsizeMode;
    set narrowEllipsize(val: Pango.EllipsizeMode);
    get policy(): ViewSwitcherPolicy;
    set policy(val: ViewSwitcherPolicy);
    get stack(): Gtk.Stack;
    set stack(val: Gtk.Stack);

    // Constructors

    static ["new"](): ViewSwitcher;

    // Members

    get_narrow_ellipsize(): Pango.EllipsizeMode;
    get_policy(): ViewSwitcherPolicy;
    get_stack(): Gtk.Stack | null;
    set_narrow_ellipsize(mode: Pango.EllipsizeMode): void;
    set_policy(policy: ViewSwitcherPolicy): void;
    set_stack(stack?: Gtk.Stack | null): void;
}
export module ViewSwitcherBar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        policy: ViewSwitcherPolicy;
        reveal: boolean;
        stack: Gtk.Stack;
    }
}
export class ViewSwitcherBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ViewSwitcherBar>;

    constructor(properties?: Partial<ViewSwitcherBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ViewSwitcherBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get policy(): ViewSwitcherPolicy;
    set policy(val: ViewSwitcherPolicy);
    get reveal(): boolean;
    set reveal(val: boolean);
    get stack(): Gtk.Stack;
    set stack(val: Gtk.Stack);

    // Constructors

    static ["new"](): ViewSwitcherBar;

    // Members

    get_policy(): ViewSwitcherPolicy;
    get_reveal(): boolean;
    get_stack(): Gtk.Stack | null;
    set_policy(policy: ViewSwitcherPolicy): void;
    set_reveal(reveal: boolean): void;
    set_stack(stack?: Gtk.Stack | null): void;
}
export module ViewSwitcherTitle {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        policy: ViewSwitcherPolicy;
        stack: Gtk.Stack;
        subtitle: string;
        title: string;
        title_visible: boolean;
        titleVisible: boolean;
        view_switcher_enabled: boolean;
        viewSwitcherEnabled: boolean;
    }
}
export class ViewSwitcherTitle extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<ViewSwitcherTitle>;

    constructor(properties?: Partial<ViewSwitcherTitle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ViewSwitcherTitle.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get policy(): ViewSwitcherPolicy;
    set policy(val: ViewSwitcherPolicy);
    get stack(): Gtk.Stack;
    set stack(val: Gtk.Stack);
    get subtitle(): string;
    set subtitle(val: string);
    get title(): string;
    set title(val: string);
    get title_visible(): boolean;
    get titleVisible(): boolean;
    get view_switcher_enabled(): boolean;
    set view_switcher_enabled(val: boolean);
    get viewSwitcherEnabled(): boolean;
    set viewSwitcherEnabled(val: boolean);

    // Constructors

    static ["new"](): ViewSwitcherTitle;

    // Members

    get_policy(): ViewSwitcherPolicy;
    get_stack(): Gtk.Stack | null;
    get_subtitle(): string | null;
    get_title(): string | null;
    get_title_visible(): boolean;
    get_view_switcher_enabled(): boolean;
    set_policy(policy: ViewSwitcherPolicy): void;
    set_stack(stack?: Gtk.Stack | null): void;
    set_subtitle(subtitle?: string | null): void;
    set_title(title?: string | null): void;
    set_view_switcher_enabled(enabled: boolean): void;
}
export module Window {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class Window extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<Window>;

    constructor(properties?: Partial<Window.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Window.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Window;
}
export module WindowHandle {
    export interface ConstructorProperties extends Gtk.EventBox.ConstructorProperties {
        [key: string]: any;
    }
}
export class WindowHandle extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<WindowHandle>;

    constructor(properties?: Partial<WindowHandle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WindowHandle.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): WindowHandle;
}

export interface SwipeableNamespace {
    $gtype: GObject.GType<Swipeable>;
    prototype: SwipeablePrototype;
}
export type Swipeable = SwipeablePrototype;
export interface SwipeablePrototype extends Gtk.Widget {
    // Members

    emit_child_switched(index: number, duration: number): void;
    get_cancel_progress(): number;
    get_distance(): number;
    get_progress(): number;
    get_snap_points(): number[];
    get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    get_swipe_tracker(): SwipeTracker;
    switch_child(index: number, duration: number): void;
    vfunc_get_cancel_progress(): number;
    vfunc_get_distance(): number;
    vfunc_get_progress(): number;
    vfunc_get_snap_points(): number[];
    vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;
    vfunc_get_swipe_tracker(): SwipeTracker;
    vfunc_switch_child(index: number, duration: number): void;
}

export const Swipeable: SwipeableNamespace;
