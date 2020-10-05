
<p  align="center">

<img  width="192"  src="https://ideea.io/assets/img/logos/s4/s4-logo-dark.svg"  alt="S4">

</p>

  

---

  

### [S4](https://ideea.io/s4) &nbsp;&nbsp;|&nbsp;&nbsp; [Getting Started](https://ideea.io/s4/getting-started-tutorial) &nbsp;&nbsp;|&nbsp;&nbsp; [Deploy a Node](https://app.ideea.io/sign-up/s4) &nbsp;&nbsp;|&nbsp;&nbsp; [Build a Node](https://github.com/Ideea-inc/S4) &nbsp;&nbsp;|&nbsp;&nbsp; [Ideea.io](https://ideea.io)

  

---

  

# S4

S4 is 100% compatible S3 storage, accessed through Tor and distributed using IPFS.

Tor does not just provide anonymity, Tor acts as a DNS. S4 server uses Tor hidden services, this allows you to create a free .onion domain name for your buckets without using 3rd-parties. A [sidecar docker container](https://github.com/Ideea-inc/s4-client) is provided to seamlessly proxy requests from your existing S3 code over Tor to S4.

[IPFS](https://github.com/ipfs/ipfs) acts as a CDN. Each S4 bucket is published to IPFS under a separate key allowing you to address your files using any existing IPFS HTTP gateway like this [https://ipfs.io/ipns/Qmxxxxxx/image.png](https://ipfs.io/ipfs/QmXgDCpJtZdgb1pMmAesTTQcddBjgm7gTs4aX8cB6ThX17).

  

## Create S4 server
```sh

$ git clone git@github.com:Ideea-inc/S4.git

$ cd S4/

$ docker run -it --rm -v $(pwd)/data/tor:/web ideea/s4-tor-proxy generate ^s4

$ docker-compose up

```

  

## Node.js AWS-SDK Example

An [example](https://github.com/Ideea-inc/S4/blob/master/example/src/index.js) is included showing the current Node.js AWS-SDK working with the [sidecar docker container](https://github.com/Ideea-inc/s4-client).

```sh

$ cd example/

$ docker-compose up -d

$ docker exec -ti my-app node /app/src/index.js

```

## Build a Node

S4 is designed to run on dedicated hardware like a Raspberry Pi. Below are some basic instructions to 

- Install Ubuntu 20.04

-  `$ git clone git@github.com:Ideea-inc/S4.git`

-  `$ cd S4`

-  `$ ./set-up`

-  `$ sudo mount /dev/XXX /mnt/ssd`

-  `$ sed -i "" "s#S4_ROOT=.*#S4_ROOT=/mnt/ssd#" .env`

-  `$ sed -i "" "s#ACCESS_KEY=.*#ACCESS_KEY=$(openssl rand -hex 10)#" .env`

-  `$ sed -i "" "s#SECRET_KEY=.*#SECRET_KEY=$(openssl rand -hex 20)#" .env`

-  `$ sudo reboot`

-  `$ docker run -it --rm -v /mnt/ssd/tor:/web ideea/s4-tor-proxy:arm64v8 generate ^s4`

-  `$ docker-compose up`

 ## Support My Work
S4 is open-source and 100% free to use, modify and redistribute. If you would like to support my work, please [deploy an S4 node on my platform](https://app.ideea.io/sign-up/s4). S4 pricing is about the same as Amazon EBS on a per GB basis.

- 500GB - $50/month
- 1TB - $100/month
- 2TB- $200/month

