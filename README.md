

gcloud run deploy nodejsmongodbtodo   --source .   --region us-central1   --platform managed   --allow-unauthenticated
gcloud functions deploy fastifyServer   --gen2   --runtime=nodejs18   --region=us-central1   --entry-point=fastifyServer   --trigger-http   --allow-unauthenticated
gcloud config list project
gcloud beta billing projects describe my-gcp-905100001
gcloud beta billing projects link my-gcp-905100001 --billing-account=01708D-7DDB7C-588F13	
gcloud beta billing projects describe my-gcp-905100001
gcloud functions deploy fastifyServer --gen2 --runtime=nodejs18 --region=us-central1 --entry-point=fastifyServer --trigger-http   --allow-unauthenticated

gcloud config set project my-gcp-905100001
gcloud projects create my-gcp-nextjs-905100001 --name="My GCP Nextjs Project 01"
gcloud beta billing projects link my-gcp-nextjs-905100001 --billing-account=01708D-7DDB7C-588F13

git pull --rebase origin main
history | awk '{$1=""; print $0}' | sed 's/^ *//' | tac | awk '!seen[$0]++' | head -n 50
npm install -g firebase-tools
firebase login
firebase init
which firebase
npm install firebase
firebase use --add
firebase init hosting
npm run dev
npm run build
firebase deploy

