import type {
  ComponentPropsWithRef,
  ComponentType,
  ElementType,
  ReactElement,
} from "react";

// type CustomComponentProps<
//   C extends keyof JSX.IntrinsicElements | ComponentType<any>,
//   O extends object,
// > = ComponentPropsWithRef<
//   C extends keyof JSX.IntrinsicElements | ComponentType<any> ? C : never
// > &
//   O & {
//     as?: C;
//   };

// type CustomComponent<
//   C extends keyof JSX.IntrinsicElements | ComponentType<any>,
//   O extends object,
// > = {
//   // props: CustomComponentProps<C, O>
//   test: <AsC extends keyof JSX.IntrinsicElements | ComponentType<any> = C>(
//     props: CustomComponent<AsC, O>,
//   ) => ReactElement<CustomComponentProps<AsC, O>>;
// };

// export type As = ElementType;

// /**
//  * C: Component
//  * P: Props
//  */
// export type MergeWithAs<C extends As, P extends object = {}> = Omit<P, "as"> & {
//   as?: C;
// };
// export type ComponentPropsWithAs<C extends As, P extends object = {}> = Omit<
//   ComponentPropsWithRef<C>,
//   keyof MergeWithAs<C, P>
// > &
//   MergeWithAs<C, P>;
