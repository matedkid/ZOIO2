# ResolveJá — site estático (pronto para Vercel)

## Publicar
1. Edite `config.js` (Instagram; WhatsApp já configurado).
2. Vercel > Add New Project > envie esta pasta (ou `vercel` na CLI). Sem build, sem framework (Other).

## Já funciona
Layout responsivo, menu mobile, animações, FAQ, validação dos formulários, envio pelo WhatsApp com dados preenchidos, SEO básico, páginas de privacidade e termos.

## Depende de configuração
- Perfil real do Instagram (`config.js`).
- Salvar solicitações/cadastros: **hoje NÃO são salvos em banco**. Defina `endpoint` em `config.js` (ex.: Formspree, ou API própria/Supabase). Os dados vão com `status: "pendente"`. Nunca coloque chaves secretas no front-end; use variáveis de ambiente da Vercel em uma função `api/`.
- Painel administrativo: ainda não existe (recomenda-se Supabase/Airtable + login).
- Textos jurídicos: modelos; revisar com advogado. CNPJ: preencher no rodapé quando existir.
- Domínio e URL canônica; imagens/fotos reais da marca, se desejar.
