"use client";

import { Check, Times, ExclamationTriangle, InfoCircle } from "@primeicons/react";
import { Toast } from "@primereact/ui/toast";
import {
  Toaster,
  type ToasterRegionInstance,
  type ToastType,
} from "@primereact/ui/toaster";

/**
 * App-wide toast host. Render <BaseToast /> once in the root layout, then call
 * `toast(...)` (re-exported above) from anywhere.
 */
export default function BaseToast() {
  return (
    <Toaster.Root>
      <Toaster.Portal>
        <Toaster.Region>
          {({ toaster }: ToasterRegionInstance) =>
            toaster?.toasts.map((item: ToastType) => (
              <Toast.Root key={item.id} toast={item}>
                <Toast.Content>
                  <Toast.Icon match="success">
                    <Check />
                  </Toast.Icon>
                  <Toast.Icon match="error">
                    <Times />
                  </Toast.Icon>
                  <Toast.Icon match="warn">
                    <ExclamationTriangle />
                  </Toast.Icon>
                  <Toast.Icon match="info">
                    <InfoCircle />
                  </Toast.Icon>
                  <Toast.Message>
                    <Toast.Title />
                    <Toast.Description />
                  </Toast.Message>
                  <Toast.Close>
                    <Times />
                  </Toast.Close>
                </Toast.Content>
              </Toast.Root>
            ))
          }
        </Toaster.Region>
      </Toaster.Portal>
    </Toaster.Root>
  );
}
