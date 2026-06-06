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

The default compose file keeps the main tools public so Google can crawl and index them. Enable login later only when you want private accounts and stored user data:

```bash
export NGALIHIYA_ENABLE_LOGIN=true
export NGALIHIYA_ADMIN_PASSWORD='replace-with-a-strong-password'
docker compose -f docker-compose.ngalihya.yml up -d
```

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
- creates an initial admin user when `NGALIHIYA_ENABLE_LOGIN=true`
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
