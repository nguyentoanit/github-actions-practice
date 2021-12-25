# How to use

## Start server with ngrok

### Generate new secret keys

#### SSH key

1. Open Git Bash.
2. Paste the text below, substituting in your GitHub email address.

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

3. Adding your public SSH key to Github secret: `SSH_PUBLIC_KEY`

#### ngrok personal authtoken

Create a free `ngrok` account and add to Github secret: `NGROK_AUTHTOKEN`

A free ngrok account

### To SSH to this runner

`ssh -i /path/to/private/key -p <port> runner@0.tcp.ngrok.io`

> You can find the free port in the workflow logs
