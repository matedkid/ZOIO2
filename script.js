const C=window.RJ,$=s=>document.querySelector(s);
const wa=t=>`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(t)}`;
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa(a.dataset.wa));
document.querySelectorAll("[data-ig]").forEach(a=>a.href=C.instagram);
$("#mb").onclick=()=>{const u=$("nav ul");u.classList.toggle("open");$("#mb").setAttribute("aria-expanded",u.classList.contains("open"))};
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>$("nav ul").classList.remove("open")));
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&(x.target.classList.add("on"),io.unobserve(x.target))),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
document.querySelectorAll("[data-cat]").forEach(a=>a.addEventListener("click",()=>{const s=$("#categoria");if(s)s.value=a.dataset.cat}));
function setup(id,title,fields){
  const f=$("#"+id);
  f.addEventListener("submit",async ev=>{
    ev.preventDefault();let bad=false;
    f.querySelectorAll(".err").forEach(e=>e.remove());
    f.querySelectorAll("[required]").forEach(i=>{
      const v=i.value.trim();let m="";
      if(!v)m="Campo obrigatório.";
      else if(i.type==="tel"&&v.replace(/\D/g,"").length<10)m="Informe DDD + número.";
      if(m){bad=true;const s=document.createElement("span");s.className="err";s.textContent=m;i.after(s)}
    });
    if(bad){f.querySelector(".err").previousElementSibling.focus();return}
    const d=Object.fromEntries(new FormData(f));
    const msg=`*${title}*\n`+fields.map(([k,l])=>`${l}: ${d[k]||"-"}`).join("\n");
    window.open(wa(msg),"_blank","noopener");
    let saved=false;
    if(C.endpoint){try{const r=await fetch(C.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tipo:title,...d,status:"pendente"})});saved=r.ok}catch(e){}}
    const ok=f.nextElementSibling;
    ok.style.display="block";
    ok.innerHTML=`<strong>Solicitação enviada!</strong> ${saved?"Também registramos seus dados. ":""}Abrimos o WhatsApp da ResolveJá com sua mensagem; é só confirmar o envio lá. Retornamos pelo canal combinado, conforme disponibilidade.<br><br>Não abriu? <a class="btn s" target="_blank" rel="noopener" href="${wa(msg)}">Abrir WhatsApp</a>`;
    ok.scrollIntoView({behavior:"smooth",block:"center"});
  });
}
setup("f1","Nova solicitação",[["nome","Nome"],["whats","WhatsApp"],["cidade","Cidade"],["categoria","Categoria"],["desc","Problema"],["contato","Contato preferido"]]);
setup("f2","Cadastro de parceiro (pendente de análise)",[["nome","Nome/empresa"],["whats","WhatsApp"],["tipo","Serviço"],["cidade","Cidade de atendimento"],["desc","Descrição"]]);
