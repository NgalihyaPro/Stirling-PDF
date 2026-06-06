# Ngalihya PDF Deployment

Use `docker-compose.ngalihya.yml` for a first production deployment.

## Start

Start the public SEO-friendly app:

```bash
docker compose -f docker-compose.ngalihya.yml up -d --build
```

On Windows PowerShell:

```powershell
docker compose -f docker-compose.ngalihya.yml up -d --build
```

The default compose file keeps the main tools public so Google can crawl and index them. Enable login when you want user accounts:

```bash
export NGALIHIYA_ENABLE_LOGIN=true
export NGALIHIYA_ADMIN_PASSWORD='replace-with-a-strong-password'
docker compose -f docker-compose.ngalihya.yml up -d
```

## Google Login

Ngalihya PDF is configured to use Google OAuth for user accounts. Public PDF
tools stay available without login, while users can sign in with Google for
account features.

1. Create a Google Cloud project.
2. Open **APIs & Services > OAuth consent screen**.
3. Set the app name to `Ngalihya PDF`.
4. Add your support email and developer contact email.
5. Add `ngalihyapdf.com` as an authorized domain.
6. Open **APIs & Services > Credentials**.
7. Create an **OAuth client ID** with application type **Web application**.
8. Add this authorized JavaScript origin:

```text
https://ngalihyapdf.com
```

9. Add these authorized redirect URIs:

```text
https://ngalihyapdf.com/login/oauth2/code/google
https://www.ngalihyapdf.com/login/oauth2/code/google
```

10. On the VPS, create a real `.env` file from the example:

```bash
cp .env.ngalihya.example .env
nano .env
```

11. Put your Google client ID and secret in `.env`:

```env
NGALIHIYA_ENABLE_LOGIN=true
NGALIHIYA_LOGIN_METHOD=oauth2
NGALIHIYA_GOOGLE_LOGIN_ENABLED=true
NGALIHIYA_GOOGLE_CLIENT_ID=your-google-client-id
NGALIHIYA_GOOGLE_CLIENT_SECRET=your-google-client-secret
NGALIHIYA_PUBLIC_URL=https://ngalihyapdf.com
```

12. Start the app:

```bash
docker compose --env-file .env -f docker-compose.ngalihya.yml up -d --build
```

With `NGALIHIYA_LOGIN_METHOD=oauth2`, the login page is Google-only. To keep an
admin username/password fallback visible too, set:

```env
NGALIHIYA_LOGIN_METHOD=all
```

For launch, leave:

```env
NGALIHIYA_GOOGLE_AUTO_CREATE_USERS=true
NGALIHIYA_GOOGLE_BLOCK_REGISTRATION=false
```

That allows new users to create accounts with Google. Auto-created OAuth users
receive the normal user role, not admin.

The app listens on port `8080` by default. To use another host port:

```bash
export NGALIHIYA_PDF_PORT=8081
```

## Stored Data

Persistent app data is stored under:

```text
./stirling/ngalihya/config
./stirling/ngalihya/logs
./stirling/ngalihya/storage
./stirling/ngalihya/data
```

These folders are ignored by Git. Keep backups of `config` and `storage` if users, settings, or file-sharing data matter.

## Production Defaults

The deployment compose file:

- keeps login disabled by default so public tool pages can be indexed
- supports Google OAuth login when `NGALIHIYA_GOOGLE_LOGIN_ENABLED=true`
- creates an initial admin user when normal login is enabled
- keeps uploaded/processed files out of Git
- disables survey, metrics, update display, and URL-to-PDF
- enables public Google visibility and serves `/robots.txt` plus `/sitemap.xml`
- sets the visible app name to `Ngalihya PDF`

## SEO

After deployment, check:

```text
https://ngalihyapdf.com/robots.txt
https://ngalihyapdf.com/sitemap.xml
```

Submit `https://ngalihyapdf.com/sitemap.xml` in Google Search Console after DNS and HTTPS are working.

## Nginx

Use `ngalihyapdf.com` and `www.ngalihyapdf.com` as the public hostnames:

```nginx
server {
    server_name ngalihyapdf.com www.ngalihyapdf.com;

    client_max_body_size 100M;

    location ^~ /swagger-ui {
        return 404;
    }

    location ^~ /v1/api-docs {
        return 404;
    }

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Put the app behind HTTPS before making it public:

```bash
certbot --nginx -d ngalihyapdf.com -d www.ngalihyapdf.com
```
