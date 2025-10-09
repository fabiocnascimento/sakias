$(function () {
  // Dropdown funcional
  const brandData = {
    addorna: {
      logo: "assets/variables/addorna/addorna-logo.png",
      corDivisoria: "#a4a980",
      corCargo: "#a4a980",
      whatsapp: "assets/variables/addorna/addorna-whats.png",
      telefone: "assets/variables/addorna/addorna-telefone.png",
      local: "assets/variables/addorna/addorna-endereco.png",
      instagram: "assets/variables/addorna/addorna-insta.png",
      site: "assets/variables/addorna/addorna-site.png",
      instagramLink: "https://www.instagram.com/addornacasa",
      siteLink: "https://www.addorna.com.br",
    },
    "center-festas": {
      logo: "assets/variables/center-festas/center-festas-logo.png",
      corDivisoria: "#D0A44E",
      corCargo: "#D0A44E",
      whatsapp: "assets/variables/center-festas/center-festas-whats.png",
      telefone: "assets/variables/center-festas/center-festas-telefone.png",
      local: "assets/variables/center-festas/center-festas-endereco.png",
      instagram: "assets/variables/center-festas/center-festas-insta.png",
      site: "assets/variables/center-festas/center-festas-site.png",
      instagramLink: "https://www.instagram.com/centerfestas",
      siteLink: "https://www.centerfestas.com.br",
    },
    deccora: {
      logo: "assets/variables/deccora/deccora-logo.png",
      corDivisoria: "#054236",
      corCargo: "#054236",
      whatsapp: "assets/variables/deccora/deccora-whats.png",
      telefone: "assets/variables/deccora/deccora-telefone.png",
      local: "assets/variables/deccora/deccora-endereco.png",
      instagram: "assets/variables/deccora/deccora-insta.png",
      site: "assets/variables/deccora/deccora-site.png",
      instagramLink: "https://www.instagram.com/deccoracasa",
      siteLink: "https://www.deccora.com.br",
    },
  };

  $("#brand-select").on("change", function () {
    const value = $(this).val();
    // Define os campos inferiores
    const fields = $("#nome, #cargo, #whatsapp, #telefone-adicional");

    if (value === "none") {
      $(".preview").hide();
      $("#preview-placeholder").show();
      fields.prop("disabled", true); // 🔒 desativa todos
    } else {
      $(".preview").show();
      $("#preview-placeholder").hide();
      fields.prop("disabled", false); // 🔓 reativa todos

      const data = brandData[value];
      $("#logo-empresa").attr("src", data.logo);
      $("#cor-divisoria").css("background-color", data.corDivisoria);
      $("#a_cargo").css("color", data.corCargo);
      $("#ico_whatsapp").attr("src", data.whatsapp);
      $("#ico-telefone").attr("src", data.telefone);
      $("#ico-local").attr("src", data.local);
      $("#ico-instagram").attr("src", data.instagram);
      $("#ico-site").attr("src", data.site);
      $("#instagram").attr("href", data.instagramLink);
      $("#site").attr("href", data.siteLink);
    }
  });

  // Inicialização: esconde preview se nada selecionado
  if ($("#brand-select").val() === "none") {
    $(".preview").hide();
    $("#preview-placeholder").show();
    $("#nome, #cargo, #whatsapp, #telefone-adicional").prop("disabled", true);
  }

  $("#copiar").click(function (e) {
    e.preventDefault();
    selectElementContents(document.getElementById("assinatura"));
    document.getSelection().removeAllRanges();

    // SVG inline + mensagem
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<g clip-path="url(#clip0_15_3277)">
<mask id="mask0_15_3277" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
<path d="M40 0H0V40H40V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_15_3277)">
<path opacity="0.4" d="M28.4997 3.33331H21.4997C15.7496 3.33331 13.4163 5.61665 13.3496 11.25H18.4997C25.4997 11.25 28.7497 14.5 28.7497 21.5V26.65C34.383 26.5833 36.6663 24.25 36.6663 18.5V11.5C36.6663 5.66665 34.333 3.33331 28.4997 3.33331Z" fill="#219653"/>
<path d="M18.4999 13.3333H11.4999C5.66659 13.3333 3.33325 15.6666 3.33325 21.5V28.5C3.33325 34.3333 5.66659 36.6666 11.4999 36.6666H18.4999C24.3333 36.6666 26.6666 34.3333 26.6666 28.5V21.5C26.6666 15.6666 24.3333 13.3333 18.4999 13.3333ZM20.4833 22.75L14.2999 28.9333C14.0666 29.1666 13.7666 29.2833 13.4499 29.2833C13.1333 29.2833 12.8333 29.1666 12.5999 28.9333L9.49992 25.8333C9.03325 25.3666 9.03325 24.6166 9.49992 24.15C9.96658 23.6833 10.7166 23.6833 11.1833 24.15L13.4333 26.4L18.7833 21.05C19.2499 20.5833 19.9999 20.5833 20.4666 21.05C20.9333 21.5166 20.9499 22.2833 20.4833 22.75Z" fill="#219653"/>
</g>
</g>
<defs>
<clipPath id="clip0_15_3277">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
  `;
    $(
      "#status"
    ).html(`<span style="display: inline-flex; align-items: center; gap: 8px;">
    ${svg}
    Assinatura copiada com sucesso!
  </span>`);

    // Efeito de desaparecer depois de 3 segundos
    $("#status").fadeIn(200).delay(3000).fadeOut(400);
  });

  $("#nome").on("input paste", function (e) {
    var value = $(this).val();
    if (!value) {
      value = "Nome";
    }
    $("#a_nome").html(value);
  });

  $("#cargo").on("input paste", function (e) {
    var value = $(this).val();
    if (!value) {
      value = "Cargo";
    }
    $("#a_cargo").html(value);
  });

  $("#whatsapp").on("input paste", function (e) {
    var value = $(this).val();
    if (!value) {
      value = "WhatsApp";
    }
    $("#a_whatsapp").html(
      '<img id="ico_whatsapp" src="' +
        $("#ico_whatsapp").attr("src") +
        '" style="display: inline-block; margin-right: 4px; vertical-align: middle;"> ' +
        value
    );
  });

  $("#telefone-adicional").on("input paste", function (e) {
    var value = $(this).val();
    if (!value || value.trim() === "") {
      $("#a_tel-opcional").hide();
    } else {
      $("#a_tel-opcional").show().html(value);
    }
  });

  // Inicialização: oculta campo opcional se vazio
  if (!$("#telefone-adicional").val()) {
    $("#a_tel-opcional").hide();
  }

  // Função para verificar se pode habilitar o botão de copiar
  function verificarCampos() {
    const nomePreenchido = $("#nome").val().trim() !== "";
    const cargoPreenchido = $("#cargo").val().trim() !== "";

    if (nomePreenchido && cargoPreenchido) {
      $("#copiar").prop("disabled", false).addClass("ativo");
    } else {
      $("#copiar").prop("disabled", true).removeClass("ativo");
    }
  }

  // Verifica ao digitar ou colar nos campos
  $("#nome, #cargo").on("input paste", verificarCampos);

  // Inicialização — garante que o botão comece desabilitado
  verificarCampos();
});

function selectElementContents(el) {
  var body = document.body,
    range,
    sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
    document.execCommand("copy");
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
    range.execCommand("Copy");
  }
}
