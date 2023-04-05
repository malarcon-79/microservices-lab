#!/bin/bash
mkdir -p /tmp/k3dvol

k3d cluster create dev --servers 1 --agents 2 --k3s-arg "--disable=traefik@server:*" --volume /tmp/k3dvol:/tmp/k3dvol -p "8081:80@loadbalancer"
export KUBECONFIG="$(k3d get-kubeconfig --name='k3d-cluster')"