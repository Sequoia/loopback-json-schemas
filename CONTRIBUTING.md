[Roadmap in `TODO.md`](TODO.md). :point_left: This is where to contribute if you'd like to help!

## 1. Setup

1. Clone this repository
2. `npm install`

## 2. Working on schemas

1. Work on schemas in `src`. Use **localhost URLs for references** (these will be replaced before publish)
2. Serve them from localhost using `npm run serve`.
   * You can now point to the **local** versions of these schemas for testing from **a different VSCode window with a test project**. Example: <http://localhost:8090/loopback-datasources-config.json>
3. To try them out with a JSON document in vscode, create a document like this:
   ```
   {
     "$schema": "http://localhost:8090/loopback-datasources-config.json",
     "db": {
       "name": "db",
       "connector": "memory"
     },
     "mysql": {
       "host": "localhost",
       "url": "",
       "database": "boston",
       "name": "mysql",
       "connector": "mysql",
       "user": "root"
     }
   }
   ``` 
4. To get VSCode to reload your schema after changing it, add a query string to the end of the `$schema` URL:
  1. Edit schema in `src`
  2. in your test project window: `"$schema": "http://localhost:8090/loopback-datasources-config.json?`**`x=1"`**
  3. Edit schema in `src`
  4. in your test project window: `"$schema": "http://localhost:8090/loopback-datasources-config.json`**`x=2"`**
  5. etc.

## 3. Publishing/Submitting PR

1. run `npm run build` in order to get your changes into the `dist` directory
2. commit, push, submit PR

Production schemas are served from the `dist` directory. The `build` npm script does the following:
  1. copies files from `src` to `dist`
  2. replaces `http://localhost:8090` with the real base url for the schemas. This is currently github but will likely be schema store later.

:warning: PRs *must* have changes committed to both the `src` & `dist` directories.