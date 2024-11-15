This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
Contractual-2.0
├─ .eslintrc.json
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ dev
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ dev
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-6c33099384e164a03ca52dd189defd71415b8975.idx
│  │     ├─ pack-6c33099384e164a03ca52dd189defd71415b8975.pack
│  │     └─ pack-6c33099384e164a03ca52dd189defd71415b8975.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ dev
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ dev
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ app
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components.json
├─ jest.config.js
├─ jest.setup.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ contracts
│  │  │  └─ [id]
│  │  │     └─ page.tsx
│  │  ├─ dashboard
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ auth
│  │  │  └─ auth-form.tsx
│  │  ├─ comments
│  │  │  └─ comment-section.tsx
│  │  ├─ contracts
│  │  │  ├─ contract-editor.tsx
│  │  │  ├─ contract-list.tsx
│  │  │  └─ version-history.tsx
│  │  ├─ notifications
│  │  │  └─ notification-bell.tsx
│  │  ├─ permissions
│  │  │  └─ permission-manager.tsx
│  │  ├─ providers
│  │  │  └─ theme-provider.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ alert-dialog.tsx
│  │     ├─ alert.tsx
│  │     ├─ aspect-ratio.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ breadcrumb.tsx
│  │     ├─ button.tsx
│  │     ├─ calendar.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ chart.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ collapsible.tsx
│  │     ├─ command.tsx
│  │     ├─ context-menu.tsx
│  │     ├─ dialog.tsx
│  │     ├─ drawer.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ hover-card.tsx
│  │     ├─ input-otp.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ loading-card.tsx
│  │     ├─ menubar.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ pagination.tsx
│  │     ├─ popover.tsx
│  │     ├─ progress.tsx
│  │     ├─ radio-group.tsx
│  │     ├─ resizable.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ slider.tsx
│  │     ├─ sonner.tsx
│  │     ├─ switch.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     ├─ textarea.tsx
│  │     ├─ theme-toggle.tsx
│  │     ├─ toast.tsx
│  │     ├─ toaster.tsx
│  │     ├─ toggle-group.tsx
│  │     ├─ toggle.tsx
│  │     └─ tooltip.tsx
│  ├─ hooks
│  │  ├─ use-mobile.tsx
│  │  └─ use-toast.ts
│  ├─ lib
│  │  ├─ diff.ts
│  │  ├─ supabase
│  │  │  ├─ client.ts
│  │  │  └─ types.ts
│  │  └─ utils.ts
│  ├─ middleware.ts
│  ├─ styles
│  │  ├─ animations.ts
│  │  └─ fonts.ts
│  └─ types
│     └─ supabaseTypes.ts
├─ tailwind.config.js
├─ tailwind.config.ts
└─ tsconfig.json

```
```
Contractual-2.0
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ dev
│  │     │  ├─ dev-aider
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ dev
│  │           ├─ dev-aider
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ 01
│  │  │  ├─ b8b6d4f716ff7c26065bc9e46aebd932729fc1
│  │  │  └─ ff19c7e453295645fa83788d3ffedf6944226a
│  │  ├─ 02
│  │  │  ├─ e111d81dd774038ac483c11b5f5a8f8aceb024
│  │  │  └─ e85a7815d9ec9e668b3302a450adaf9c358726
│  │  ├─ 05
│  │  │  └─ fa74627cbe41ba91e78429c57a8c9a26b541eb
│  │  ├─ 09
│  │  │  └─ bfac0e48ab8a9cf26c42cbdb3eb2c207c32e61
│  │  ├─ 0a
│  │  │  └─ a7bb48ae6c37ecff18332c16490e90af66fa86
│  │  ├─ 0b
│  │  │  ├─ 4a48d87fabda1c6e9612172abb56a78e26c14f
│  │  │  └─ 8ac8a635ef95d8d670b09022d2851026bcde34
│  │  ├─ 0e
│  │  │  └─ 27a79f8e2eb4a2efdce3e357a77013f3f6f523
│  │  ├─ 0f
│  │  │  ├─ 1611c40dcb09b9b1623cf155f54845ac1d432e
│  │  │  ├─ 66882a3a7091b47b43f0cfaf4160bf084c3e18
│  │  │  └─ c4c0e0714c5f1a7032cc71e4846470a487a471
│  │  ├─ 10
│  │  │  └─ 2336320b3545d50c22b09a76c5c8186ad41d09
│  │  ├─ 12
│  │  │  └─ d81c4a853472948b6dd2e85eff99b5d12fe60b
│  │  ├─ 13
│  │  │  └─ 0eb5281460dc6ab5ed4bcef693a32d8e0ad974
│  │  ├─ 14
│  │  │  ├─ 19f56695be517ec78fe8ad26a6f7da3a7d53b2
│  │  │  └─ 5590068a263b868a1905161de03a58dc22d369
│  │  ├─ 15
│  │  │  └─ a172c6e5b9eb22f071a36d8cb839a6e6fbd783
│  │  ├─ 17
│  │  │  └─ 1beb46d9c020c1be1ee9cb260b816d0bc2c1dd
│  │  ├─ 19
│  │  │  ├─ 25cd69d024557c69d4112f14d699d46b091f74
│  │  │  └─ d0f2ffa897cf71c34639567572187b5916bb1d
│  │  ├─ 1b
│  │  │  ├─ 7427298f2fe072ada0a02be94cb1dcc61efb42
│  │  │  └─ fe506dd97677fb5d07cc3ce6017a1beba55efe
│  │  ├─ 1c
│  │  │  ├─ 876bbeecabe59b684719afe58e684f34cdecbf
│  │  │  └─ f66500f4b15c8be66274c57db1f331c145ecfe
│  │  ├─ 1d
│  │  │  └─ 14eff72d089e8e58d56b25bb19d0965485b74b
│  │  ├─ 1e
│  │  │  └─ 7085f94e326e88677544664f2f0240b9d03ff0
│  │  ├─ 1f
│  │  │  └─ 1f47f04955f3f843efb82e81f1fdb4266d9686
│  │  ├─ 22
│  │  │  ├─ 5b92a0df13ad25c00eff9867f78d0a5293ba75
│  │  │  └─ 839fba340a8131d542fa85a8f62f1f41d59493
│  │  ├─ 24
│  │  │  └─ c788c2c44cb058812cdbb97d071439a87af5f0
│  │  ├─ 25
│  │  │  └─ e7b474464c9849cef836f5c863be0f38bdaac3
│  │  ├─ 26
│  │  │  ├─ 11c2afbf9756592855783dd1666fea42ed59a9
│  │  │  ├─ ce6e78291b5c7ea81d097a2371511ffc8b3d14
│  │  │  └─ eb109120e2ee43feddb68900f353a119976c41
│  │  ├─ 27
│  │  │  └─ 0dd12b1a3eb1b5181023912234a8fbf90dd2b3
│  │  ├─ 28
│  │  │  ├─ 78725652e4360b9c2cfa66ae2dbc7cfbe5720a
│  │  │  └─ fa3e974ee7a44ffbafd521c9f04ad35ee400d2
│  │  ├─ 29
│  │  │  └─ 3916c6577d86be5a1e55191db84fa78f0f5749
│  │  ├─ 2a
│  │  │  └─ 7c1e3214f1767694b82d85f768a6c029f851b6
│  │  ├─ 2b
│  │  │  ├─ 0fe1dfef3b17850bbac040665f514a8ffd0f15
│  │  │  └─ a49af423f4ed8a5281a3c5cc4adcd8b82a82b2
│  │  ├─ 2c
│  │  │  └─ 218a1cce28e2fc95e7582383b3c22f1ad40d89
│  │  ├─ 30
│  │  │  ├─ 4831e80d1d81b6714d2b5baaa87c64bfad91d6
│  │  │  ├─ 9952ae8982f56fd7d280607d15669c4735c617
│  │  │  └─ fc44d90f39c96ca622c9174684dd6bc8534e16
│  │  ├─ 31
│  │  │  └─ 93b0636c794877cf5de6bd40cb59a8876157b5
│  │  ├─ 32
│  │  │  ├─ 45fb7bd368c1e71394eca2dde8bd8bc54a45dd
│  │  │  └─ 80d5c75d7eb223b5d3d678bc783f8c9fae64da
│  │  ├─ 33
│  │  │  ├─ 4bcbf79f7173166fd16077716403c50dc11a14
│  │  │  └─ 70c343d4f75f85dee04dd69da8423d16fc7ba5
│  │  ├─ 34
│  │  │  └─ 7ced8dbdf75bab6c097a877f2924065bcaa0c0
│  │  ├─ 35
│  │  │  ├─ 3b413bc5968ea6101bd4a0acee6d9a9000c1e4
│  │  │  └─ fa671f6356982b39f4e1c5422b4d416a9f7f01
│  │  ├─ 36
│  │  │  ├─ 496a28727a3643b4212a14225d4f6cbd50bda5
│  │  │  └─ d2804ab2ed08ef35795eaf25cf77141ed4ceb5
│  │  ├─ 3c
│  │  │  └─ c7cdfbf8beb79ceda0425708bdb81bbb39340e
│  │  ├─ 3e
│  │  │  └─ b1e701a4bfc53f38c7fd237b852c13cd5b50f2
│  │  ├─ 40
│  │  │  └─ c3d68096c270ef976f3db4e9eb42b05c7067bb
│  │  ├─ 41
│  │  │  └─ fa7e0561a3fdb5f986c1213a35e563de740e96
│  │  ├─ 42
│  │  │  └─ 29203870e448e30d376ca50eb35c35fc34a7df
│  │  ├─ 43
│  │  │  ├─ 2a7ae3d4e8517019d0ed1f836c1d5a8f93eb12
│  │  │  └─ cffbdabe082a6a0602b993f7bb78a558949743
│  │  ├─ 45
│  │  │  └─ 2f4d9f0dde88611113632c1d759d60155fe4d3
│  │  ├─ 47
│  │  │  └─ 1482cd4a0feb3a0e6a09b38d74a843d205e18e
│  │  ├─ 4d
│  │  │  └─ 858bb6b02662c749d3cb334129a9a1977b0c51
│  │  ├─ 4f
│  │  │  └─ b672e9aee85a533c757c91f6cb42d9aa3221f1
│  │  ├─ 51
│  │  │  ├─ 4f4342b8279fead4f829cfddd26280f545550e
│  │  │  ├─ ac48e4e2c681b4698067a505b7da1868674ca8
│  │  │  └─ e507ba9d08bcdbb1fb630498f1cbdf2bf50093
│  │  ├─ 52
│  │  │  ├─ 1b94b07981916e3ee36e8cc28a70b4d9abc728
│  │  │  ├─ 9a9c7548c2a6f2dc7c876df7a8185c7b9d4878
│  │  │  └─ c88908d80499af96c52444940f0f838cdfeec9
│  │  ├─ 53
│  │  │  ├─ 0da4e7364683566a54a98d292a64662f78a5cd
│  │  │  ├─ 4182176bf87f9308355514adc884d2b69750a5
│  │  │  ├─ 9c653447724425beb0a71482fac5d08b4f0982
│  │  │  └─ e70dba6a96b3e81c6aad23a4e3a1a97f24794b
│  │  ├─ 55
│  │  │  └─ 86fa9b21f48d45092fd7e5856a87b5a1a91e22
│  │  ├─ 57
│  │  │  └─ 9377de1834df00c19ad84d35d422b6ef6bc000
│  │  ├─ 59
│  │  │  ├─ a26452940473d58818cb8489bf2b35e8b9b004
│  │  │  └─ d2ad51782c22c743a2a458351e6af90b7e443a
│  │  ├─ 5b
│  │  │  └─ f2444ab5cb1a7f0b433f65dd9a0f812d6ec05d
│  │  ├─ 5c
│  │  │  └─ 87ea4865610374cdc591d1619157b4d8909a87
│  │  ├─ 5d
│  │  │  └─ 4ae87ea13251a35bb2f5932234dbbf6b802b1e
│  │  ├─ 5e
│  │  │  ├─ 6b8cf93fa10b9f0d9dd719239ca9a9ca92c5e1
│  │  │  └─ ad7acc52d407e2382433ccde712637381cdade
│  │  ├─ 5f
│  │  │  ├─ 6818e055f80715c9501648b4f6e59835a7af5d
│  │  │  └─ d198510a233c46abb96a086b51cd5d8c55b63e
│  │  ├─ 60
│  │  │  ├─ 7ec35f90216466238eb0299dd7ee428e9d60c6
│  │  │  ├─ e6c96f72f0350d08b47e4730cab8f3975dc853
│  │  │  └─ f862b63d0ba3be68fb06139a7b84f4c425d396
│  │  ├─ 61
│  │  │  ├─ af9ca3a92787aafaccde7ad0b185dfd26f713e
│  │  │  └─ d2b451ef5fd1d9faa1162371628a8132dd51df
│  │  ├─ 62
│  │  │  └─ 295f3d9bffeb275ad46926b2f89e951aec28e0
│  │  ├─ 64
│  │  │  └─ 310478472273b1d5f65d1338641228fbed22ff
│  │  ├─ 65
│  │  │  └─ a8e724a283150c97c604822fe08e9e6c2f01c0
│  │  ├─ 66
│  │  │  └─ e521eae1fa6129f5ea981c5ce5a62c9a4ee26b
│  │  ├─ 68
│  │  │  └─ 551b9276b4164a8263aa58d385db30f81a4453
│  │  ├─ 6a
│  │  │  ├─ 0ef53dde8991d3adeadd791cd262808aaf9ac0
│  │  │  ├─ 3c73fd351b105d353cc319528f5773db4e6aeb
│  │  │  ├─ 77599f77e10713ae9d76f1c613a2636b3e7a79
│  │  │  └─ fd7420360a89d604becac759fde181c0c68da0
│  │  ├─ 6c
│  │  │  └─ c53d8f886ce528a05909736f14fd6b2635d339
│  │  ├─ 6e
│  │  │  ├─ a8b53104807616992ff3247c2bfb8e4b23b3e3
│  │  │  └─ deed71fac377996a465ebee6397f5a3b142356
│  │  ├─ 75
│  │  │  └─ b95324c6761cedee926542671c0911ddb8412b
│  │  ├─ 77
│  │  │  └─ 1b34032ee882cbdf2244152c7084c09e80904f
│  │  ├─ 78
│  │  │  ├─ 0890af684e0f61f1d408a42309d8a15ac8c98f
│  │  │  └─ 9903be278f8511189e6f0afd5d667f0390f1fb
│  │  ├─ 7a
│  │  │  └─ d880e3f736a15f777f3fead96f2c1c8551b71d
│  │  ├─ 7f
│  │  │  └─ 3502f8b2820be1d6f0aa4c1ffaa351799c1ed3
│  │  ├─ 83
│  │  │  ├─ 4ced6ed32bbbb04968d10e2d3e53d422d4417a
│  │  │  └─ ee2b4b099f4f1d132bc83915ea0517e50d712e
│  │  ├─ 85
│  │  │  ├─ 1b41a90de8ed7af40349ef39c963a32dd9ffdd
│  │  │  └─ a368849691a095a2f179402465c42beea5eccc
│  │  ├─ 86
│  │  │  └─ 20baa3b32301ef0e071b13049f2a00caa6f0bc
│  │  ├─ 87
│  │  │  ├─ 141d8a50d9a7423446174a3086d25aa08c2c58
│  │  │  └─ 8963706bcd8cac4d7192dbce651d1ad75ee782
│  │  ├─ 88
│  │  │  └─ ecf696b1dc3086e6883e78ae0547880512e5b7
│  │  ├─ 8a
│  │  │  └─ 622e4c74ca43615448b487c862c7f5514cc97e
│  │  ├─ 8c
│  │  │  └─ c67a5c91750e611f92718a674bfb585f8298cb
│  │  ├─ 8e
│  │  │  ├─ 9ec3dd2dcd12f196e6f300f5c3386e61b069ad
│  │  │  └─ ee8ab521a8ff6c73ffbe1659ffeadb01660493
│  │  ├─ 8f
│  │  │  └─ 94b38f0003098621884034f90def6eb4c309b1
│  │  ├─ 92
│  │  │  └─ 0ecf57bbc1500cf16525c963bd718435b32322
│  │  ├─ 93
│  │  │  ├─ 42b50e6741d3d5d4297c70cfa6ac0cdea97ca9
│  │  │  ├─ ef37ba98dcd024a577feac7e4fea21c36add62
│  │  │  └─ efe59e0b9b6ca6694afce9391d4c154e303a74
│  │  ├─ 96
│  │  │  └─ 9946d3b832bb544f6428ca686eda512a8c4055
│  │  ├─ 98
│  │  │  ├─ 419135693b694e389629f7a3a16396267d1690
│  │  │  ├─ 54153fdf05f677c0b220e29b3f09e713494a09
│  │  │  └─ b938eec2ac701589cae8461c00d0a130e5c757
│  │  ├─ 99
│  │  │  └─ a4deb424e0e535aebf9a17df2b8fbf8e6e2b33
│  │  ├─ 9a
│  │  │  └─ 84b2ebb8c79d07342817737725e08e6d106fee
│  │  ├─ 9f
│  │  │  ├─ a48946afd1eb56bd932377fd888e3986304676
│  │  │  └─ c929b3aac4856c41e3dd35783d4cd997689418
│  │  ├─ a0
│  │  │  ├─ 427aca24efdc29c56832acd6e7ce28d6235a11
│  │  │  └─ ec48beee4e92c55292fcb104680af68d00d365
│  │  ├─ a2
│  │  │  ├─ af24339a7f8ac9d1a4a24327701ffb48da45c4
│  │  │  └─ f743b8ac3db1e3845a63ead391d334fb19c313
│  │  ├─ a3
│  │  │  └─ 7f17ba04055c1c174bd439d58aa3b5b2857cc9
│  │  ├─ a5
│  │  │  └─ 3a60c89ac58f23f7b8331592cbf420a0fd3131
│  │  ├─ a6
│  │  │  └─ 7c061d7c2133fc1302a528f78e2a9a9d8eca3f
│  │  ├─ ae
│  │  │  ├─ 3a2ef5a69643c32b84c222a9374b3bb1776aa4
│  │  │  └─ c104a328869c0452b0d4ebd97ea24b3b74620e
│  │  ├─ b1
│  │  │  └─ 604968cbc79ab2c32abe3f5e1a4185a783df04
│  │  ├─ b5
│  │  │  └─ 94453c90243fd0b1bf622d03d2ce6fbc76ce5e
│  │  ├─ b6
│  │  │  └─ da9ff99b100fd188a20e2d06cb5e86a3704a12
│  │  ├─ b7
│  │  │  └─ 633f997030409b0a73c13ed7a18ee4ab021df6
│  │  ├─ b9
│  │  │  └─ 4fce33c39e5aa275b957fa29c45cfd909badcf
│  │  ├─ ba
│  │  │  └─ f2d8dee425eb25cadff517f052e19b2ea0450b
│  │  ├─ bb
│  │  │  └─ 0c9bbf7058ec6e7ccb21be9c31f63c062ca63f
│  │  ├─ bc
│  │  │  └─ 69cf2dbfc512347350c5cea6cb8e4a3d7f667d
│  │  ├─ bd
│  │  │  ├─ 0c391ddd1088e9067844c48835bf4abcd61783
│  │  │  ├─ d53432b12c21b16402730dbed5db290985299a
│  │  │  └─ fdd1158569e25da4b0f9a02cef9e1629871836
│  │  ├─ bf
│  │  │  ├─ 35277cc767cf47bb296f18790aa2d77c3d3801
│  │  │  └─ 609a5747fde4195232b19c2a77acc6b2d30512
│  │  ├─ c0
│  │  │  └─ d1bb987d6eae9cda4aba74dc50cd628b3c1f61
│  │  ├─ c1
│  │  │  └─ 9bea37315b245ce0c3588deafb27adc8397f0f
│  │  ├─ c2
│  │  │  └─ e5c87565037813ce78b32409c33d6e1c752d9f
│  │  ├─ c3
│  │  │  ├─ 1bd1eec6e7c2ac75c3ce5ee1f91f1afe246670
│  │  │  ├─ 1c2b3bc1a9f1677b32250668a6d47fe5a353ce
│  │  │  ├─ 2ce6fc236d9397cdf37ac3c9753b0671f98c5a
│  │  │  └─ e527f5b95ffa4067adfd7798cae748d6308e6d
│  │  ├─ c6
│  │  │  └─ af88e8c773efe5271d4f01434351f02b77775f
│  │  ├─ c7
│  │  │  └─ 5823b5ad49a32f9d10afbd6f03c6d0345e07d9
│  │  ├─ c9
│  │  │  └─ 8e88ec66a7d23617817a1af673e877b8d506a7
│  │  ├─ cb
│  │  │  └─ e5a36b695dda828fa2f17e46fe35970aa6fa78
│  │  ├─ cc
│  │  │  ├─ 9fe468fb3840b45234f007844f6383de04a947
│  │  │  └─ b7cf64726557735b2b5508898c90e827858dac
│  │  ├─ ce
│  │  │  └─ 264aef25034feded1285c057c7d11d3d0f1178
│  │  ├─ d3
│  │  │  └─ 2d60e2ed4121118ee9b2e9a074fd7b9d947b2f
│  │  ├─ d6
│  │  │  ├─ 58022239e092d30ab02f572448a28ef3937576
│  │  │  ├─ 6b5b671fa7b521b3b5c8d743bb4d9dd07d6231
│  │  │  └─ a5226f5e9cc09a2bd1ccbce465524e41f04345
│  │  ├─ d8
│  │  │  └─ 688aa4252e86414cf7136a2c66a9960c7c9145
│  │  ├─ d9
│  │  │  └─ 1cfdd288c751a689d4e2665a98110caef1aa0c
│  │  ├─ dd
│  │  │  └─ 127e1f2cec3ba5014343ade3f0ad6ab8899aa7
│  │  ├─ df
│  │  │  └─ 61a13881538701ff6a10d644d217bfa01b64e6
│  │  ├─ e0
│  │  │  └─ 7e13a0fde7aedbd45ab8f57f60ea94f54ec44a
│  │  ├─ e1
│  │  │  └─ 833a6bffaef6501a9dcc6325e2026abe41eb3b
│  │  ├─ e2
│  │  │  ├─ 3bcef95c07e7cee725d66b85918749570316cd
│  │  │  └─ e95a7ad37e1fbcea2a5565880d4744d8659a51
│  │  ├─ e4
│  │  │  └─ cfcad18f05185f7487baa24e50c2fe0e06c06c
│  │  ├─ e5
│  │  │  └─ 4d91cf81f48462887825698166393764c4251f
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ 2064deaa990f9c3e844f025f7a6c4997887f2c
│  │  │  └─ 87101ef455a6a59604b0be7a08e16faad4e540
│  │  ├─ e9
│  │  │  ├─ 5415eaa027310afd559dc1957b9c4822bf9302
│  │  │  └─ bde1793628d1d76ab8e5700c2484547e8bbbf2
│  │  ├─ ea
│  │  │  └─ 40d196dc72673f36c4084bf56457385edc855e
│  │  ├─ ec
│  │  │  └─ 505d00d95ecdbbc1501d1bfa7020e51d6010a7
│  │  ├─ ee
│  │  │  └─ b2d7aebcf77d22605587c4055cde9cd351b5ef
│  │  ├─ f0
│  │  │  ├─ 00e3ef5176395b067dfc3f3e1256a80c450015
│  │  │  └─ 7b46a0283fa4e5e3b26009e583ab74ddfe2583
│  │  ├─ f1
│  │  │  ├─ 73996fc48efe2d909196b348d198b6a6458421
│  │  │  └─ d67d18c204bbf724b18505f898b4d4c378ea2a
│  │  ├─ f4
│  │  │  ├─ 06239563d1456e0cff231505881d168e725c18
│  │  │  └─ bc5586b67f45d3cc35f228e8bac2e4bc2cea16
│  │  ├─ f6
│  │  │  ├─ 2edea578d50058bef5e6bcc178b88d145564e9
│  │  │  └─ 6fcfa0ddbe3b9b7f4773b1d69576aa61f96db8
│  │  ├─ f9
│  │  │  ├─ 09c0085f0609c59a9084b089f5a0ccb88e7952
│  │  │  ├─ 535f15c30ea3e57e197f8d2938fc926cce41c5
│  │  │  └─ 7a59c7285fc0387d300fce843158109f5bc7eb
│  │  ├─ fb
│  │  │  └─ 545b2ff1103371f6fe71084a97307bb904377b
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-6c33099384e164a03ca52dd189defd71415b8975.idx
│  │     ├─ pack-6c33099384e164a03ca52dd189defd71415b8975.pack
│  │     └─ pack-6c33099384e164a03ca52dd189defd71415b8975.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ dev
│     │  ├─ dev-aider
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ dev
│     │     ├─ dev-aider
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ app
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components.json
├─ jest.config.js
├─ jest.setup.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ (auth)
│  │  │  ├─ callback.ts
│  │  │  ├─ layout.tsx
│  │  │  ├─ login
│  │  │  │  └─ page.tsx
│  │  │  └─ register
│  │  │     └─ page.tsx
│  │  ├─ (dashboard)
│  │  │  ├─ dashboard
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ contracts
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  ├─ page.tsx
│  │  └─ register
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ auth
│  │  │  └─ auth-form.tsx
│  │  ├─ AuthButton.tsx
│  │  ├─ comments
│  │  │  └─ comment-section.tsx
│  │  ├─ contracts
│  │  │  ├─ contract-editor.tsx
│  │  │  ├─ contract-list.tsx
│  │  │  └─ version-history.tsx
│  │  ├─ CTA.tsx
│  │  ├─ Features.tsx
│  │  ├─ Hero.tsx
│  │  ├─ main-nav.tsx
│  │  ├─ notifications
│  │  │  └─ notification-bell.tsx
│  │  ├─ permissions
│  │  │  └─ permission-manager.tsx
│  │  ├─ providers
│  │  │  └─ theme-provider.tsx
│  │  ├─ ui
│  │  │  ├─ accordion.tsx
│  │  │  ├─ alert-dialog.tsx
│  │  │  ├─ alert.tsx
│  │  │  ├─ aspect-ratio.tsx
│  │  │  ├─ avatar.tsx
│  │  │  ├─ badge.tsx
│  │  │  ├─ breadcrumb.tsx
│  │  │  ├─ button.tsx
│  │  │  ├─ calendar.tsx
│  │  │  ├─ card.tsx
│  │  │  ├─ carousel.tsx
│  │  │  ├─ chart.tsx
│  │  │  ├─ checkbox.tsx
│  │  │  ├─ collapsible.tsx
│  │  │  ├─ command.tsx
│  │  │  ├─ context-menu.tsx
│  │  │  ├─ dialog.tsx
│  │  │  ├─ drawer.tsx
│  │  │  ├─ dropdown-menu.tsx
│  │  │  ├─ form.tsx
│  │  │  ├─ hover-card.tsx
│  │  │  ├─ input-otp.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ label.tsx
│  │  │  ├─ loading-card.tsx
│  │  │  ├─ menubar.tsx
│  │  │  ├─ navigation-menu.tsx
│  │  │  ├─ pagination.tsx
│  │  │  ├─ popover.tsx
│  │  │  ├─ progress.tsx
│  │  │  ├─ radio-group.tsx
│  │  │  ├─ resizable.tsx
│  │  │  ├─ scroll-area.tsx
│  │  │  ├─ select.tsx
│  │  │  ├─ separator.tsx
│  │  │  ├─ sheet.tsx
│  │  │  ├─ sidebar.tsx
│  │  │  ├─ skeleton.tsx
│  │  │  ├─ slider.tsx
│  │  │  ├─ sonner.tsx
│  │  │  ├─ switch.tsx
│  │  │  ├─ table.tsx
│  │  │  ├─ tabs.tsx
│  │  │  ├─ textarea.tsx
│  │  │  ├─ theme-toggle.tsx
│  │  │  ├─ toast.tsx
│  │  │  ├─ toaster.tsx
│  │  │  ├─ toggle-group.tsx
│  │  │  ├─ toggle.tsx
│  │  │  └─ tooltip.tsx
│  │  └─ user-nav.tsx
│  ├─ hooks
│  │  ├─ use-mobile.tsx
│  │  └─ use-toast.ts
│  ├─ lib
│  │  ├─ diff.ts
│  │  ├─ supabase
│  │  │  ├─ client.ts
│  │  │  ├─ server.ts
│  │  │  └─ types.ts
│  │  ├─ utils
│  │  │  └─ password.ts
│  │  └─ utils.ts
│  ├─ middleware.ts
│  ├─ styles
│  │  ├─ animations.ts
│  │  └─ fonts.ts
│  └─ types
│     └─ supabaseTypes.ts
├─ tailwind.config.js
├─ tailwind.config.ts
└─ tsconfig.json

```