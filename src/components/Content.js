import styled from "@emotion/styled";
import React from "react";

const ContentBox = styled("div")`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  animation: rollDown 1s both;
  border: 8px solid ${({ theme }) => theme.colors.secondaryAction};
  @keyframes rollDown {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }
`;

const TabContainer = styled("nav")`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondaryAction};
  border-radius: 10px;
`;

const TabButton = styled("button")`
  width: 100%;
  background-color: ${({ theme, name, active }) =>
    name === active ? theme.colors.primary : theme.colors.secondaryAction};
  margin: 0;
  border: none;

  border-radius: ${({ name }) =>
    name === "impressum" ? "0px 7px 0px 0px" : "7px 0px 0px 0px"};
`;

const ContentText = styled("article")`
  width: 100%;
  height: calc(100% - 40px);
  border-radius: 0px 0px 8px 8px;
  overflow: auto;
  scrollbar-color: ${({ theme }) => {
    return `${theme.colors.secondaryAction} ${theme.colors.primary} `;
  }};
`;

export default function Content() {
  const [animationEnd, setAnimationEnd] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState("impressum");

  const text =
    activeButton === "impressum" ? (
      <>
        <h1>Impressum</h1>
        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Tobias Erich
          <br />
          T&uuml;binger Str.20/4
          <br />
          72336 Balingen
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: 015123024498
          <br />
          E-Mail: tobiaserich@hotmail.de
        </p>
        <h3>Haftung f&uuml;r Inhalte</h3>{" "}
        <p>
          Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
          f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
          gespeicherte fremde Informationen zu &uuml;berwachen oder nach
          Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
          hinweisen.
        </p>{" "}
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
          werden wir diese Inhalte umgehend entfernen.
        </p>{" "}
        <h3>Haftung f&uuml;r Links</h3>{" "}
        <p>
          Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
          f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
          F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
          Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>{" "}
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>{" "}
        <h3>Urheberrecht</h3>{" "}
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
          bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>{" "}
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <p>
          Quelle:{" "}
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p>
      </>
    ) : (
      ""
    );
  return (
    <ContentBox onAnimationEnd={() => setAnimationEnd(true)}>
      {animationEnd ? (
        <>
          <TabContainer>
            <TabButton
              name="info"
              onClick={() => {
                setActiveButton("info");
              }}
              active={activeButton}
            >
              Info
            </TabButton>
            <TabButton
              name="impressum"
              onClick={() => {
                setActiveButton("impressum");
              }}
              active={activeButton}
            >
              Impressum
            </TabButton>
          </TabContainer>
          <ContentText>{text} </ContentText>
        </>
      ) : (
        ""
      )}
    </ContentBox>
  );
}
