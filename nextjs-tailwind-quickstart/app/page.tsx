"use client";

import Image from "next/image";
import ThemeSwitcher from "@/components/theme-switcher";
import { Tabs, TabsList, TabsTab, TabsPanels, TabsPanel } from "@/components/ui/tabs";
import { InputText } from "@/components/ui/inputtext";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center py-6">
      <main className="flex w-full flex-col gap-6">
        {/* header */}
        <div className="mx-auto flex w-full max-w-md items-center justify-between px-6">
          <Image
            className="dark:filter-[brightness(0)_invert(1)]"
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/common.images/logo/primereact-logo.svg"
            alt="PrimeReact Logo"
            width={150}
            height={50}
          />
          <ThemeSwitcher />
        </div>

        {/* intro */}
        <div className="mx-auto flex w-full max-w-md flex-col gap-2 px-6">
          <h1 className="text-2xl font-semibold tracking-tight text-surface-900 dark:text-surface-0 text-balance">
            Get started with PrimeReact
          </h1>
          <p className="text-surface-500 dark:text-surface-400 text-pretty">
            A Tailwind starter with dark mode. Every component in{" "}
            <code className="text-surface-700 dark:text-surface-200">
              components/ui
            </code>{" "}
            wraps a PrimeReact primitive and is styled with Tailwind + PrimeUI
            tokens.
          </p>
        </div>

        {/* colorful box with the tailwind tabs card inside */}
        <div className="px-6">
          <div className="mx-auto flex max-w-md justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 p-8 sm:p-12 dark:from-blue-900 dark:via-indigo-900 dark:to-indigo-950">
            <div className="w-72 overflow-hidden rounded-lg shadow-xl ring-1 ring-surface-950/5 dark:ring-surface-0/10">
              <Tabs defaultValue="signin">
                <TabsList>
                  <TabsTab value="signin">Sign in</TabsTab>
                  <TabsTab value="signup">Sign up</TabsTab>
                </TabsList>

                <TabsPanels>
                  <TabsPanel value="signin">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-medium text-surface-700 dark:text-surface-300"
                        >
                          Email
                        </label>
                        <InputText
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          fluid
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="password"
                          className="text-xs font-medium text-surface-700 dark:text-surface-300"
                        >
                          Password
                        </label>
                        <InputText
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          fluid
                        />
                      </div>
                      <div className="flex justify-end pt-1">
                        <Button>Sign in</Button>
                      </div>
                    </div>
                  </TabsPanel>

                  <TabsPanel value="signup">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="signup-email"
                          className="text-xs font-medium text-surface-700 dark:text-surface-300"
                        >
                          Email
                        </label>
                        <InputText
                          id="signup-email"
                          type="email"
                          placeholder="you@example.com"
                          fluid
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="signup-password"
                          className="text-xs font-medium text-surface-700 dark:text-surface-300"
                        >
                          Password
                        </label>
                        <InputText
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                          fluid
                        />
                      </div>
                      <div className="flex justify-end pt-1">
                        <Button>Create account</Button>
                      </div>
                    </div>
                  </TabsPanel>
                </TabsPanels>
              </Tabs>
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="mx-auto flex w-full max-w-md flex-wrap items-center gap-4 px-6">
          <a
            href="https://primeui.store/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-w-40 flex-1 items-center justify-center rounded-full bg-surface-950 px-5 text-base font-medium text-surface-0 transition-colors hover:bg-surface-800 dark:bg-surface-0 dark:text-surface-950 dark:hover:bg-surface-200"
          >
            Get all access
          </a>
          <a
            href="https://primereact.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-w-40 flex-1 items-center justify-center rounded-full border border-surface-300 bg-surface-0 px-5 text-base font-medium text-surface-700 transition-colors hover:bg-surface-100 dark:border-surface-700 dark:bg-transparent dark:text-surface-100 dark:hover:bg-surface-800"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
