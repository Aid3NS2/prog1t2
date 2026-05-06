const server = Bun.serve({
  routes: {},

  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    const filePath = `./public${pathname}`;
    const file = Bun.file(filePath);
    const exists = await file.exists();

    if (!exists())
      return new Response("Not Found", { status: 404})
    return new Response(file);
  
    // tá com algum erro no exists. pedir pro professor arrumar próxima aula (nao deu tempo na última)
    // também pedir p ajudar a resolver o bglh do git pull não funcionar mais

    return new Response(file);

  },

});

console.log(`Server running at ${server.url}`);