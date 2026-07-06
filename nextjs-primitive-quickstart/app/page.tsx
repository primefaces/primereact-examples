"use client";

import Image from "next/image";
import ThemeSwitcher from "@/components/theme-switcher";
import { Tabs } from "@/components/ui/tabs";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

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
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
            Get started with PrimeReact
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-pretty">
            A primitive starter with Tailwind and dark mode. Every component in{" "}
            <code className="text-neutral-700 dark:text-neutral-200">
              components/ui
            </code>{" "}
            wraps a PrimeReact primitive and is styled by you.
          </p>
        </div>

        {/* colorful box with the primitive tabs card inside */}
        <div className="px-6">
          <div className="mx-auto flex max-w-md justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 p-8 sm:p-12 dark:from-blue-900 dark:via-indigo-900 dark:to-indigo-950">
            <div className="w-72 overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10">
              <Tabs.Root defaultValue="signin">
                <Tabs.List>
                  <Tabs.Content>
                    <Tabs.Tab value="signin">Sign in</Tabs.Tab>
                    <Tabs.Tab value="signup">Sign up</Tabs.Tab>
                    <Tabs.Indicator />
                  </Tabs.Content>
                </Tabs.List>

                <Tabs.Panels>
                  <Tabs.Panel value="signin">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="password"
                          className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Password
                        </label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="flex justify-end pt-1">
                        <Button>Sign in</Button>
                      </div>
                    </div>
                  </Tabs.Panel>

                  <Tabs.Panel value="signup">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="signup-email"
                          className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Email
                        </label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="signup-password"
                          className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Password
                        </label>
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                        />
                      </div>
                      <div className="flex justify-end pt-1">
                        <Button>Create account</Button>
                      </div>
                    </div>
                  </Tabs.Panel>
                </Tabs.Panels>
              </Tabs.Root>
            </div>
          </div>
        </div>

        {/* actions — plain Tailwind buttons */}
        <div className="mx-auto flex w-full max-w-md flex-wrap items-center gap-4 px-6">
          <a
            href="https://primeui.store/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-w-40 flex-1 items-center justify-center rounded-full bg-neutral-950 px-5 text-base font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Get all access
          </a>
          <a
            href="https://primereact.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-w-40 flex-1 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-transparent dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
