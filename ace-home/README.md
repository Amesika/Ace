# AceHomeCli

## Commande

- mvn clean package -Dmaven.test.skip


- docker build -t amesika/ace-home:latest .
- docker run --rm --name="ace-home" -d -p7000:8080 amesika/ace-home:latest
- docker compose up -d
- docker compose down