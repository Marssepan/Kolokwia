## 1. Podstawy fizyczne i definicje

* **Elektronika:** Dziedzina nauki zajmująca się ruchem elektronów swobodnych w próżni, gazach i ciałach stałych (głównie półprzewodnikach).
* **Ładunek elektryczny (q, Q):** Występuje w porcjach kwantowych (niepodzielnych). 
    * **Kwant ładunku:** **e = 1,602 * 10<sup>-19</sup> C**.
    * Jednostką jest kulomb (1C). Nośnikami są elektrony (-e) i protony (+e). Ładunki jednoimienne się odpychają, różnoimienne przyciągają.
* **Prąd elektryczny:** Uporządkowany ruch ładunków.
    * **Złota zasada schematów:** Strzałka prądu wskazuje kierunek ruchu ładunków dodatnich (czyli prąd płynie w kierunku przeciwnym do faktycznego ruchu elektronów).
* **Natężenie prądu (i, I):** Pochodna ładunku po czasie (szybkość przepływu ładunku). Wzór: **i = dq / dt**. Jednostka to amper (1A = 1C/1s).
* **Gęstość prądu (J):** Wektor określający przestrzenny rozkład prądu na danej powierzchni. Wzór: **J = I / S**. Jednostka to A/m². Zwrot wektora jest zgodny ze strzałką prądu.

**Prawo Coulomba i Pole elektryczne:**
* **Siła oddziaływania ładunków:** **F = (Q<sub>1</sub> * Q<sub>2</sub>) / (4 * π * ε * r<sup>2</sup>)**
* **Natężenie pola elektrycznego (E):** **E = F / q** (Jednostka: V/m lub N/C).
* **Praca sił pola (równomiernego):** **W<sub>AB</sub> = F * l<sub>AB</sub> = q * E * l<sub>AB</sub>**.

**Napięcie (U) i Potencjał (V):**
* **Napięcie:** Iloraz pracy do przenoszonego ładunku: **U<sub>AB</sub> = W<sub>AB</sub> / q**. Jednostka to wolt (1V = 1J/1C).
* **Potencjał:** Zdolność pola do wykonania pracy. To napięcie między danym punktem a nieskończonością (ziemią). Potencjał ziemi przyjmuje się jako 0V.
* **Zależność:** **U<sub>AB</sub> = V<sub>A</sub> - V<sub>B</sub>** (napięcie to różnica potencjałów).

**Moc prądu (P):** * Granica ilorazu pracy do czasu (**P = dW / dt**). 
* Dla prądu stałego: **P = U * I = I<sup>2</sup> * R = U<sup>2</sup> / R**. Jednostka to wat (1W).

---

## 2. Podstawowe Prawa Obwodów

* **Gałąź:** Odcinek obwodu z takim samym prądem.
* **Węzeł:** Punkt, w którym schodzą się co najmniej trzy prądy.
* **Oczko:** Kontur zamknięty (po usunięciu elementu przestaje być zamknięty).
* **Prawo Ohma:** **I = U / R**
* **I Prawo Kirchhoffa (Napięciowe/Węzłowe):** Suma algebraiczna prądów w węźle wynosi 0 (suma prądów wpływających równa się sumie wypływających). **Σ I = 0**.
* **II Prawo Kirchhoffa (Oczkowe):** Suma algebraiczna wszystkich napięć w zamkniętym oczku jest równa zeru. **Σ U = 0**. (Uwaga na strzałkowanie: zgodnie z obiegiem z plusem, przeciwnie z minusem).

---

## 3. Parametry połączeń (Szeregowe vs Równoległe)

| Parametr | Połączenie Szeregowe | Połączenie Równoległe |
| :--- | :--- | :--- |
| **Prąd / Napięcie** | Prąd (**I**) jest ten sam wszędzie. | Napięcie (**U**) jest to samo wszędzie. |
| **Rezystancja (R)** | **R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub>** | **1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + ... + 1/R<sub>n</sub>** |
| **Pojemność (C)** | **1/C<sub>eq</sub> = 1/C<sub>1</sub> + 1/C<sub>2</sub> + ...** | **C<sub>eq</sub> = C<sub>1</sub> + C<sub>2</sub> + ... + C<sub>n</sub>** |
| **Indukcyjność (L)** | **L<sub>eq</sub> = L<sub>1</sub> + L<sub>2</sub> + ... + L<sub>n</sub>** | **1/L<sub>eq</sub> = 1/L<sub>1</sub> + 1/L<sub>2</sub> + ...** |
| **Konduktancja (G)** | **1/G<sub>eq</sub> = 1/G<sub>1</sub> + 1/G<sub>2</sub> + ...** | **G<sub>eq</sub> = G<sub>1</sub> + G<sub>2</sub> + ... + G<sub>n</sub>** |
| **Funkcja w układzie** | Dzielnik napięcia: Napięcia rozkładają się proporcjonalnie do wartości R (**U<sub>1</sub> = U * R<sub>1</sub> / (R<sub>1</sub> + R<sub>2</sub>)**). | Dzielnik prądu: Prądy rozpływają się odwrotnie proporcjonalnie do wartości R (**I<sub>1</sub> = I * R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>)**). |

---

## 4. Analiza elementów biernych (R, L, C)

### A. Rezystor (R) - Dyssypatywny (rozprasza energię)
* **Zasada działania:** Elektrony zderzają się z atomami przewodnika, przekazując im energię kinetyczną (ciepło).
* **Wzór fizyczny:** **R = (ρ * l) / S** (gdzie ρ to rezystywność, l długość, S pole przekroju).
* **Parametry rzeczywistego rezystora:** Charakteryzuje się krzywą stałej mocy (np. 0.5 W), która ogranicza dopuszczalne **I** i **U**. Rezystor rzeczywisty posiada pomijalnie małą pasożytniczą indukcyjność (od przewodu) i pojemność.
* **Oznaczenia i typoszeregi:** * Kody paskowe / SMD: Np. kod SMD "472" to **47 * 10<sup>2</sup> = 4700 Ω = 4,7 kΩ**. Litera "R" oznacza przecinek (np. 4R7 = 4,7 Ω).
    * Typoszeregi: E3, E6, E12, E24 itd. Odstępy wartości tworzone są na podstawie mnożnika **<sup>n</sup>√10**. Im wyższy szereg, tym mniejsza tolerancja błędu.

### B. Kondensator (C) - Zachowawczy (magazynuje energię w polu elektrycznym)
* **Pojemność:** **C = Q / V** (Jednostka: Farad). Dla kondensatora płaskiego: **C = (ε<sub>r</sub> * ε<sub>0</sub> * S) / d**.
* **Prąd i napięcie:** * Prąd przesunięcia: **I = C * (dV / dt)**. 
    * Dla prądu stałego (DC) **dV / dt = 0**, więc prąd nie płynie (przerwa w obwodzie).
* **Energia:** **W = 1/2 * C * V<sup>2</sup>**.
* **Reaktancja pojemnościowa (AC):** **X<sub>C</sub> = 1 / (ω * C)**. 
    * Dla **f → ∞**, **X<sub>C</sub> → 0** (zwarcie). 
    * W układach AC prąd wyprzedza napięcie o 90° (π/2).
* **Model rzeczywisty:** Posiada tzw. upływność (modelowaną jako równoległy rezystor prądu stałego).

### C. Cewka indukcyjna / Induktor (L) - Zachowawczy (magazynuje energię w polu magnetycznym)
* **Indukcyjność:** **L = (μ<sub>r</sub> * μ<sub>0</sub> * z<sup>2</sup> * S) / l** (Jednostka: Henr).
* **Napięcie i prąd:** Zgodnie z prawem Faradaya **V = L * (dI / dt)**.
* **Energia:** **W = 1/2 * L * I<sup>2</sup>**.
* **Reaktancja indukcyjna (AC):** **X<sub>L</sub> = ω * L**. 
    * Dla **f → ∞**, **X<sub>L</sub> → ∞** (przerwa w obwodzie). 
    * Dla małych częstotliwości (DC) cewka stanowi zwarcie. 
    * W układach AC prąd opóźnia się względem napięcia o 90° (π/2).
* **Model rzeczywisty:** Posiada wewnętrzną rezystancję zwojów (szeregowo z idealną cewką).

---

## 5. Prąd przemienny (AC) i Przebiegi Czasowe

* **Sygnał sinusoidalny:** **v(t) = V<sub>0</sub> * cos(ωt)**, gdzie **ω = 2πf = 2π / T**.
* **Wartość skuteczna (RMS):** To hipotetyczny prąd stały wywołujący taki sam skutek cieplny jak dany przebieg zmienny na tym samym rezystorze w tym samym czasie. Dla czystej sinusoidy: **I<sub>sk</sub> = I<sub>m</sub> / √2 ≈ 0,707 * I<sub>m</sub>**.
* **Wartość średnia:** Pamiętaj, że średnia z półokresu sinusoidy to **2 / π ≈ 0,637 * I<sub>m</sub>**.

---

## 6. Stany Nieustalone (Skok Jednostkowy)

Kluczowe zagadnienie na kolokwiach – jak zachowuje się układ po zamknięciu włącznika (t=0):

* **Układ RC:**
    * Stała czasowa **τ = R * C**.
    * Kondensator zaczyna się ładować: napięcie rośnie wykładniczo **V<sub>C</sub> = V<sub>0</sub> * (1 - e<sup>-t/RC</sup>)**.
    * Spadek napięcia na rezystorze maleje: **V<sub>R</sub> = V<sub>0</sub> * e<sup>-t/RC</sup>**. Prąd w obwodzie zanika.
* **Układ RL:**
    * Stała czasowa **τ = L / R**.
    * Prąd powoli rośnie (cewka przeciwdziała zmianom): **I = (V<sub>0</sub> / R) * (1 - e<sup>-Rt/L</sup>)**.
    * Napięcie na cewce spada: **V<sub>L</sub> = V<sub>0</sub> * e<sup>-Rt/L</sup>**.
* **Układ RLC:** Pojawiają się drgania (pulsacja **ω = 1 / √(L * C)**), o ile tłumienie układu (zależne od R) jest wystarczająco małe (**R<sup>2</sup> < 4L / C**).

---

## 7. Materiały Elektroniczne

* **Konduktywność (γ) a Rezystywność (ρ):** Są swoimi odwrotnościami (**ρ = 1 / γ**).
* **Wpływ temperatury:**
    * **Przewodniki** (np. miedź, srebro, złoto): Konduktywność **≈ 10<sup>7</sup> S/m**. Ze wzrostem temperatury ich rezystywność rośnie (przewodzą gorzej).
    * **Półprzewodniki** (np. krzem, german): Konduktywność **≈ 10<sup>-8</sup>** do **10<sup>6</sup> S/m**. Ze wzrostem temperatury ich rezystywność maleje (przewodzą lepiej, uwalniają się nośniki).
    * **Dielektryki** (np. teflon, szkło): Konduktywność **≈ 10<sup>-24</sup>** do **10<sup>-10</sup> S/m**.
* **Wzór na rezystywność temperaturową:** **ρ(T) = ρ<sub>20</sub> * [1 + α(T-20) + β(T-20)<sup>2</sup>]**.

---

## 8. Transformatory

Urządzenia bazujące na sprzężeniu elektromagnetycznym dwóch cewek (uzwojenia pierwotnego i wtórnego).

* **Przekładnia transformatora (z):** **z = N<sub>p</sub> / N<sub>S</sub>** (stosunek zwojów pierwotnych do wtórnych).
* **Zależności napięć i prądów:**
    * Napięcie: **V<sub>S</sub> = (N<sub>S</sub> / N<sub>p</sub>) * V<sub>p</sub>**
    * Prąd: **I<sub>S</sub> = (N<sub>p</sub> / N<sub>S</sub>) * I<sub>p</sub>** (transformator podwyższający napięcie, obniża prąd i odwrotnie).
* **Typy pracy uzwojeń:** Uzwojenia wtórne można połączyć szeregowo zgodnie (napięcia się sumują) lub przeciwsobnie (napięcia się odejmują). Wykorzystuje się też transformatory z odczepem w środku (np. do zasilaczy symetrycznych i prostowników na dwóch diodach). Pamiętaj też o istnieniu autotransformatorów (wspólne uzwojenie dla wejścia i wyjścia).

## 1. Wprowadzenie do elementów nieliniowych

* **Element nieliniowy** to taki, którego właściwości zależą od przepływającego przez niego prądu lub od napięcia panującego na jego zaciskach.
* Większość rzeczywistych podzespołów to elementy nieliniowe. Należą do nich między innymi elementy oświetleniowe (żarówka, świetlówka, neonówka) oraz elementy elektroniczne (dioda, tranzystor, tyrystor).
* **Charakterystyka prądowo-napięciowa (I-U)** elementu nieliniowego nie jest linią prostą.
* Zależność **I = f(U)** dla elementów nieliniowych może być przedstawiona w formie wzoru, tabeli, wykresu lub wyłącznie w sposób opisowy.

---

## 2. Przykłady elementów i ich charakterystyki I-U

* **Rezystor liniowy:** Wykazuje proporcjonalność – dwukrotny wzrost napięcia powoduje dwukrotny wzrost prądu (**I<sub>2</sub> = 2 * I<sub>1</sub>**).
* **Żarówka:** Wraz ze wzrostem napięcia prąd rośnie wolniej (**I<sub>2</sub> < 2 * I<sub>1</sub>**), ponieważ nagrzewające się włókno zwiększa swoją rezystancję, co ogranicza prąd.
* **Warystor:** Półprzewodnikowy element chroniący przed przepięciami. Wzrost napięcia przemieszcza elektrony do pasma przewodnictwa, przez co spada rezystancja elementu i prąd rośnie gwałtowniej (**I<sub>2</sub> > 2 * I<sub>1</sub>**).
* **Neonówka (charakterystyka typu S):** Początkowo gaz jest niezjonizowany i element prawie nie przewodzi prądu. Dostatecznie wysokie napięcie wywołuje lawinową jonizację, co skutkuje nagłym skokiem prądu (przejście na górną gałąź). Zmniejszenie napięcia wymusza rekombinację jonów i nagły powrót do stanu izolatora (dolna gałąź).
* **Dioda tunelowa (charakterystyka typu N):** Posiada specyficzny zakres **ujemnej rezystancji dynamicznej**.

---

## 3. Punkt pracy i rodzaje rezystancji

* **Punkt pracy:** Konkretna para parametrów **(U, I)** znajdująca się na charakterystyce elementu, określająca aktualne napięcie na jego zaciskach oraz przepływający prąd.
* **Rezystancja statyczna (R):** Iloraz napięcia i prądu elementu nieliniowego w danym punkcie pracy (**R = U / I**). Graficznie reprezentuje ją tangens kąta nachylenia **siecznej**.
* **Rezystancja dynamiczna (r):** Granica stosunku przyrostu napięcia do przyrostu prądu w danym punkcie pracy (**r = dU / dI**). Graficznie jest to tangens kąta nachylenia **stycznej** poprowadzonej do krzywej w punkcie pracy.

> **Ważne:** W przypadku elementów liniowych, rezystancja statyczna i dynamiczna są zawsze równe. Zarówno statyczna, jak i dynamiczna rezystancja elementów nieliniowych zależą od ich punktu pracy.

---

## 4. Łączenie elementów nieliniowych (Charakterystyki Zastępcze)

> Prawa Kirchhoffa są zawsze prawdziwe, niezależnie od tego czy obwód jest liniowy, czy nieliniowy.

* **Połączenie szeregowe:** Prąd zasilania jest wspólny dla elementów, a napięcia na nich się sumują (**U = U<sub>1</sub> + U<sub>2</sub>**). Metoda graficzna polega na sumowaniu napięć poszczególnych elementów dla stałych wartości prądu.
* **Połączenie równoległe:** Napięcie zasilania jest wspólne, a prądy płynące przez elementy się sumują (**I = I<sub>1</sub> + I<sub>2</sub>**). Metoda graficzna opiera się na sumowaniu prądów poszczególnych elementów dla stałych wartości napięcia.

---

## 5. Metody rozwiązywania obwodów nieliniowych

Głównym problemem w analizie układów nieliniowych jest to, że powstają skomplikowane układy równań (zamiast prostego Prawa Ohma), które mogą mieć jedno, wiele lub wcale nie mieć rozwiązań. Do ich rozwiązywania stosuje się cztery główne metody:

* **Metody dokładne:** Stosowane tylko wtedy, gdy charakterystyki podane są wzorami matematycznymi, a powstałe na ich podstawie równanie można bezbłędnie rozwiązać.
* **Metody numeryczne (np. iteracje, metoda Newtona):** Wykorzystywane przy dostępności wzorów, gdy układu nie da się rozwiązać matematycznie w sposób dokładny. Opierają się na procesie zbieżnym, dla którego matematycznie musi być spełniony warunek zbieżności: **-1 < g'(x) < 1**.
* **Metody graficzne:** Stosowane w przypadku, gdy charakterystyki podano w formie wykresu lub tabeli. Dla układu ze źródłem napięciowym i elementami w szeregu korzysta się z równania **E - U<sub>1</sub> = U<sub>2</sub>**. Na wspólnym wykresie rysuje się ch-kę jednego elementu normalnie, a ch-kę drugiego (np. źródła i rezystora) po uprzednim lustrzanym odbiciu i przesunięciu do punktu zasilania **E** (powstaje krzywa **E - N<sub>1</sub>**). Punkt przecięcia tych dwóch linii wyznacza poszukiwany punkt pracy.
* **Metody analityczne (Linearyzacja):** Polega na przybliżeniu nieliniowej funkcji za pomocą wyrażenia uproszczonego (często linii prostej).

---

## 6. Szczegóły procesu Linearyzacji

Charakterystykę rzeczywistą elementu można zastąpić linią prostą (zlinearyzować), pod warunkiem, że ograniczamy się do **niewielkiego otoczenia punktu pracy**. Równanie takiej uogólnionej prostej ma postać: **U = E<sub>N</sub> + r * I**. Pozwala to na zastąpienie trudnego obwodu nieliniowego łatwiejszym, liniowym modelem zastępczym.

* **Parametr E<sub>N</sub>:** Jest interpretowany jako idealne źródło napięciowe (SEM) na schemacie zastępczym. Stanowi punkt przecięcia zlinearyzowanej prostej z osią napięcia **U** na wykresie.
* **Parametr r:** Jest interpretowany jako szeregowa rezystancja na schemacie. Jego wartość jest równa **rezystancji dynamicznej** elementu w rozpatrywanym punkcie (**r = dU / dI**).

> **Zasada końcowa:** Po wykorzystaniu modelu zlinearyzowanego, bezwzględnie należy sprawdzić, czy element w rozwiązanym obwodzie nadal pracuje w narzuconym, małym zakresie linearyzacji.

## 1. Półprzewodniki i wiązania w ciele stałym

* **Dlaczego półprzewodniki?** W przeciwieństwie do metali (gdzie prąd przewodzą tylko elektrony), w półprzewodnikach prąd płynie dzięki **dwóm rodzajom nośników**: elektronom (ładunek ujemny, **-q**) i dziurom (ładunek dodatni, **+q**). Ponadto, ich przewodnictwo można łatwo kontrolować temperaturą, oświetleniem oraz domieszkowaniem.
* **Materiały:** Najpopularniejsze to krzem (Si) i german (Ge) z IV grupy układu okresowego oraz związki (np. GaAs, SiC). W elektronice wykorzystuje się materiały **monokrystaliczne** (idealnie uporządkowana sieć).
* **Wiązania kowalencyjne:** W krysztale krzemu (4 elektrony walencyjne) atomy uwspólniają pary elektronów z czterema sąsiadami.
* **Generacja pary elektron-dziura:** Dostarczenie energii (np. temperatury lub światła) zrywa wiązanie kowalencyjne. Uwolniony elektron staje się nośnikiem swobodnym, a puste miejsce po nim staje się **dziurą (h<sup>+</sup>)**, która również może się przemieszczać. Procesowi temu przeciwdziała **rekombinacja** (anihilacja ładunku).

---

## 2. Energetyczny Model Pasmowy

Zgodnie z zasadą Pauliego, poziomy energetyczne izolowanych atomów po połączeniu w kryształ rozszczepiają się, tworząc **pasma energetyczne**:

* **Pasmo walencyjne (E<sub>v</sub>):** W temp. 0 K całkowicie zapełnione elektronami.
* **Pasmo wzbronione / przerwa energetyczna (E<sub>g</sub>):** Obszar, w którym elektrony nie mogą przebywać. Szerokość przerwy determinuje właściwości materiału (dla Si **E<sub>g</sub> ≈ 1,1 eV**, dla Ge **E<sub>g</sub> ≈ 0,7 eV**).
* **Pasmo przewodnictwa (E<sub>c</sub>):** W temp. 0 K całkowicie puste. Elektrony, które tu trafią, mogą swobodnie przewodzić prąd.

**Klasyfikacja materiałów:**
* **Izolatory (dielektryki):** Bardzo duża przerwa energetyczna (**E<sub>g</sub> ≥ 4 eV**).
* **Półprzewodniki:** Umiarkowana przerwa energetyczna (**E<sub>g</sub> ≤ 4 eV**).
* **Przewodniki (metale):** Pasmo walencyjne i przewodnictwa nakładają się na siebie (brak przerwy) lub pasmo walencyjne jest wypełnione tylko częściowo.

---

## 3. Prawdopodobieństwo obsadzenia i Poziom Fermiego (E<sub>F</sub>)

* **Funkcja Fermiego-Diraca:** Opisuje prawdopodobieństwo zajęcia danego poziomu energetycznego przez elektron.
* **Poziom Fermiego (E<sub>F</sub>):** To poziom energetyczny, dla którego prawdopodobieństwo obsadzenia przez elektron wynosi dokładnie 0,5 (50%). Jego położenie decyduje o typie półprzewodnika:
    * **W pp. samoistnym:** **E<sub>F</sub>** leży dokładnie w połowie przerwy wzbronionej.
    * **W pp. typu N:** **E<sub>F</sub>** przesuwa się w górę, w stronę pasma przewodnictwa (**E<sub>c</sub>**).
    * **W pp. typu P:** **E<sub>F</sub>** przesuwa się w dół, w stronę pasma walencyjnego (**E<sub>v</sub>**).

---

## 4. Rodzaje półprzewodników

### A. Półprzewodnik samoistny (niedomieszkowany)
Ilość elektronów (n) i dziur (p) jest sobie równa: **n = p = n<sub>i</sub>**. Koncentracja samoistna (**n<sub>i</sub>**) silnie rośnie wraz ze wzrostem temperatury.

### B. Półprzewodniki niesamoistne (domieszkowane)
Wprowadzenie obcych atomów (domieszek) diametralnie zmienia właściwości i tworzy nośniki większościowe oraz mniejszościowe.
* **Typ N (Donorowy):** Powstaje po domieszkowaniu pierwiastkiem **V grupy** (np. Fosfor P, Antymon Sb). Donor posiada 5 elektronów – cztery tworzą wiązania, piąty staje się elektronem swobodnym. Jony donora są nieruchome (ładunek **+**). **Nośniki większościowe to elektrony** (**n<sub>n</sub> ≈ N<sub>D</sub>**).
* **Typ P (Akceptorowy):** Powstaje po domieszkowaniu pierwiastkiem **III grupy** (np. Bor B, Glin Al). Akceptor ma 3 elektrony walencyjne – brakuje mu jednego do pełnego wiązania z krzemem, co tworzy wolną dziurę. Jony akceptora są nieruchome (ładunek **-**). **Nośniki większościowe to dziury** (**p<sub>p</sub> ≈ N<sub>A</sub>**).

> **Kluczowy wzór na egzamin – Prawo masy ładunku:**
> W stanie równowagi termodynamicznej iloczyn koncentracji elektronów i dziur jest zawsze stały (dla danej temperatury) i wynosi:
> **n * p = n<sub>i</sub><sup>2</sup>**

---

## 5. Transport ładunków (Konduktywność i Prądy)

Konduktywność (**σ**, odwrotność rezystywności **ρ**) zależy od koncentracji nośników i ich ruchliwości (**μ**):
**σ = q(n * μ<sub>n</sub> + p * μ<sub>p</sub>)**

W półprzewodnikach występują **dwa niezależne mechanizmy transportu ładunków**:
* **Unoszenie (Dryft):**
    * Wywołane zewnętrznym **polem elektrycznym (E)**.
    * Wzór na gęstość prądu: **J<sub>dryft</sub> = σ * E = (q * n * μ<sub>n</sub> + q * p * μ<sub>p</sub>) * E**.
* **Dyfuzja:**
    * Wywołana różnicą (gradientem) koncentracji nośników (ładunki "rozmywają się" z miejsc, gdzie jest ich dużo, tam gdzie jest ich mało, ruch cieplny).
    * Wzór na gęstość prądu elektronów: **J<sub>dyf,n</sub> = q * D<sub>n</sub> * grad(n)**.

> Związek między unoszeniem a dyfuzją opisują **Wzory Einsteina** (**D<sub>n</sub> = (k * T / q) * μ<sub>n</sub>**). Całkowity prąd to suma prądu unoszenia i dyfuzji.

---

## 6. Czujniki i Zjawiska temperaturowe

* **Termistory NTC:** Czujniki półprzewodnikowe. Wraz ze wzrostem temperatury rośnie liczba nośników (**n<sub>i</sub>**), więc **rezystancja silnie maleje** (Ujemny Współczynnik Temperaturowy, **TC < 0**).
* **Czujniki Pt100 (RTD):** Czujniki metalowe (platynowe). Wraz ze wzrostem temperatury atomy w sieci drgają mocniej, rozpraszając elektrony, więc **rezystancja rośnie liniowo** (**TC > 0**).
* **Fotorezystory:** Pod wpływem oświetlenia (fotonów o energii wyższej od przerwy zabronionej **E<sub>g</sub>**) generowane są pary elektron-dziura, co powoduje ostry spadek rezystancji.

---

## 7. Zjawisko Halla

* Zjawisko polegające na powstawaniu napięcia poprzecznego (**U<sub>H</sub>**, napięcie Halla) w półprzewodniku umieszczonym w **polu magnetycznym**, przez który płynie prąd.
* Wynika z działania **siły Lorentza**, która odchyla poruszające się w polu magnetycznym ładunki elektryczne w kierunku krawędzi próbki.
* **Zastosowanie:** Hallotrony (czujniki pola magnetycznego, wyłączniki zbliżeniowe).

## 1. Powstawanie złącza P-N i stan równowagi

* **Złącze P-N:** Powstaje na styku półprzewodników typu P i typu N. W wyniku dyfuzji nośników (elektronów i dziur) dochodzi do ich rekombinacji na granicy obu obszarów.
* **Warstwa zaporowa (obszar zubożony):** Wymieciony z wolnych nośników obszar, w którym pozostają jedynie zjonizowane, nieruchome atomy domieszek (dipol ładunku elektrycznego).
* **Pole elektryczne:** Powstały dipol ładunku generuje wewnętrzne pole elektryczne, które przeciwdziała dalszej dyfuzji nośników (wywołuje prąd unoszenia). W stanie równowagi suma prądów dyfuzji i unoszenia wynosi zero.
* **Napięcie dyfuzyjne (U<sub>D</sub>):** Nazywane również potencjałem bariery (**φ<sub>B</sub>**). Oblicza się je ze wzoru:
**U<sub>D</sub> = (k * T / q) * ln((N<sub>A</sub> * N<sub>D</sub>) / n<sub>i</sub><sup>2</sup>)**
gdzie **V<sub>T</sub> = (k * T) / q** to potencjał termoelektryczny, wynoszący około **26 mV** w temperaturze **300 K**.

---

## 2. Polaryzacja złącza P-N

* **Polaryzacja w kierunku zaporowym ("-" na obszar P, "+" na obszar N):**
    * Napięcie zewnętrzne dodaje się do potencjału bariery.
    * Skutkuje to zwiększeniem szerokości warstwy zubożonej i zwiększeniem bariery potencjału.
    * Prądy dyfuzyjne znacząco maleją.
    * Przez złącze płynie jedynie bardzo mały **prąd nasycenia** (unoszenie nośników mniejszościowych) oraz prąd generacji.
* **Polaryzacja w kierunku przewodzenia ("+" na obszar P, "-" na obszar N):**
    * Napięcie zewnętrzne odejmuje się od potencjału bariery.
    * Zmniejsza się ładunek oraz szerokość warstwy zubożonej.
    * Bariera potencjału maleje, co pozwala na gwałtowny wzrost prądów dyfuzyjnych (przepływ nośników większościowych).

---

## 3. Parametry i modele diody

* **Wzór Shockleya (dioda idealna):** Zależność prądu od napięcia opisuje równanie:
**J = J<sub>S</sub> * (e<sup>U / φ<sub>T</sub></sup> - 1)**
gdzie **J<sub>S</sub>** to gęstość prądu nasycenia, a **φ<sub>T</sub>** to potencjał termiczny.
* **Dioda rzeczywista:**
    * Przy polaryzacji w kierunku przewodzenia pojawia się spadek napięcia na **rezystancji szeregowej (R<sub>S</sub>)**, która reprezentuje opór obszarów obojętnych i kontaktów złącza. Spadek ten opisuje równanie **ΔU = I * R<sub>S</sub>**.
    * Zazwyczaj przyjmuje się uproszczony model stałonapięciowy. Oznacza to, że po przekroczeniu pewnego progu (ok. **0,7 V** dla krzemu i **0,3 V** dla germanu), dioda działa jak źródło napięciowe (SEM) na poziomie tego progu, a w stanie zaporowym stanowi przerwę w obwodzie.
* **Rezystancja dynamiczna (r<sub>d</sub>):** To odwrotność konduktancji dynamicznej (**r<sub>d</sub> = g<sup>-1</sup> = dU / dI**). Jej wartość jest silnie zależna od aktualnego punktu pracy (**Q**) i wylicza się ją ze wzoru przybliżonego: **r<sub>d</sub> = 26 mV / I<sub>Q</sub>**.

---

## 4. Przebicie złącza i Dioda Zenera

* **Przebicie złącza** to gwałtowny wzrost prądu przy polaryzacji wstecznej, po przekroczeniu charakterystycznego napięcia przebicia.
    * **Przebicie lawinowe:** Występuje w złączach słabo domieszkowanych (o szerokiej warstwie zaporowej). Mechanizmem jest tu jonizacja zderzeniowa – rozpędzone nośniki wybijają kolejne elektrony z sieci krystalicznej.
    * **Przebicie tunelowe (Zenera):** Występuje w złączach silnie domieszkowanych (bardzo wąska bariera potencjału). Polega na bezpośrednim przejściu tunelowym nośnika przez barierę na ten sam poziom energii.
* **Dioda Zenera w stabilizatorze napięcia:** Wykorzystuje charakterystykę przebicia do stabilizowania napięcia na zadanym poziomie (**U<sub>Z</sub>**). Współczynnik stabilizacji (**k**) określa, jak skutecznie układ tłumi tętnienia napięcia i wyliczany jest jako stosunek względnej zmiany napięcia na wyjściu do względnej zmiany na wejściu.

---

## 5. Wpływ temperatury na złącze P-N

* **Kierunek przewodzenia:** Ze wzrostem temperatury całkowity prąd przeważnie rośnie, dominowany przez wzrost prądu **I<sub>0</sub>**. Przy zachowaniu stałego prądu, spadek napięcia na diodzie maleje o około **-2 mV / K**.
* **Kierunek zaporowy:** Prąd wsteczny (nasycenia i generacji) silnie rośnie wraz z temperaturą. W praktyce inżynierskiej przyjmuje się, że wartość natężenia prądu wstecznego podwaja się co każde **10°C** (10 K) wzrostu temperatury.
* **Napięcie przebicia:**
    * Przebicie tunelowe (Zenera) charakteryzuje się ujemnym współczynnikiem temperaturowym (**β < 0**) – ze wzrostem temperatury napięcie przebicia maleje z powodu zwężania się przerwy energetycznej.
    * Przebicie lawinowe ma dodatni współczynnik temperaturowy (**β > 0**) – wyższa temperatura to mocniejsze drgania sieci, co skraca drogę swobodną elektronów i wymaga wyższego napięcia do wywołania jonizacji.

---

## 6. Fotodiody i Fotoogniwa

### Fotodioda
Działa w polaryzacji zaporowej. Światło o energii fotonów przekraczającej szerokość przerwy energetycznej (**E<sub>fot</sub> ≥ E<sub>g</sub>**) generuje dodatkowe pary elektron-dziura. Przy braku oświetlenia płynie jedynie mały prąd zwany **prądem ciemnym (I<sub>0</sub>)**. Fotogeneracja powoduje powstanie **fotoprądu**, co zwiększa prąd wsteczny elementu.

**Rodzaje:**
* **Fotodioda p-i-n:** Pomiędzy obszary p i n wprowadzona jest warstwa niedomieszkowana (i), co rozszerza obszar ładunku przestrzennego i poprawia wydajność zbierania nośników.
* **Fotodioda lawinowa:** Wykorzystuje kaskadowe powielanie par nośników. Absorpcja fotonu zapoczątkowuje proces lawinowy.

### Fotoogniwo (Fotowoltaika)
Światło generuje pary elektron-dziura, które wewnętrzne pole elektryczne złącza rozdziela (elektrony do n, dziury do p). Skutkuje to wymuszeniem przepływu prądu wstecznego (**I<sub>L</sub>**) przez zewnętrzne obciążenie (**R<sub>L</sub>**). Spadek napięcia na obciążeniu z kolei polaryzuje ogniwo w kierunku przewodzenia. Fotoogniwo pracuje w czwartej ćwiartce charakterystyki I-U, gdzie generuje moc.

* **Współczynnik wypełnienia (FF):** Zdefiniowany jako **FF = (I<sub>m</sub> * V<sub>m</sub>) / (I<sub>sc</sub> * V<sub>oc</sub>)** – określa jakość i sprawność ogniwa.
* Straty sprawności wynikają ze zjawisk takich jak termalizacja (nadmiarowa energia fotonów zamieniana w ciepło), rekombinacja ładunków oraz brak absorpcji fotonów o zbyt małej energii. Aby zwiększyć sprawność (nawet powyżej 40%), stosuje się **ogniwa wielozłączowe** zbudowane z materiałów o różnej przerwie energetycznej (np. InGaP, InGaAs, Ge).

---

## 7. Przykłady zastosowania diod

* **Zabezpieczenie przed odwrotną polaryzacją zasilania** (np. obwody przełączające zasilanie awaryjne).
* **Diody odsprzęgające (ang. free-wheeling diode):** Zabezpieczają obwody przed przepięciami powstającymi podczas wyłączania obciążeń indukcyjnych (np. cewek).
* **Prostowniki:** Przetwarzają napięcie przemienne na stałe. Dzielą się na **jednopołówkowe** oraz **dwupołówkowe**, w tym bardzo popularny **Mostek Graetza**. W układach tych najczęściej stosuje się dodatkowo **kondensator filtrujący**, który wygładza przebieg (większa pojemność skutkuje mniejszą amplitudą tętnień).

## 1. Tranzystor bipolarny (BJT) – Budowa i Idea Działania

**Budowa:** Składa się z trzech obszarów o odmiennym typie przewodności, tworzących dwa złącza p-n. Wyprowadzenia to:
* **Emiter (E):** Najsilniej domieszkowany (wstrzykuje nośniki).
* **Baza (B):** Bardzo cienka i słabo domieszkowana warstwa środkowa.
* **Kolektor (C):** Zbiera nośniki, które przeszły przez bazę.

**Typy tranzystorów:** NPN oraz PNP.

**Zasada działania (na przykładzie NPN):**
1. Złącze Baza-Emiter (B-E) polaryzuje się w **kierunku przewodzenia**, co wymusza wstrzykiwanie elektronów z emitera do bazy.
2. Złącze Kolektor-Baza (C-B) polaryzuje się w **kierunku zaporowym**. Generuje to pole elektryczne, które "wyciąga" elektrony z bazy do kolektora.
3. **Efekt:** Niewielki prąd bazy steruje wielokrotnie większym prądem kolektora.

---

## 2. Równania Prądowe i Układy Pracy

* **I Prawo Kirchhoffa dla tranzystora:** Suma prądów w tranzystorze wynosi zawsze: **I<sub>E</sub> = I<sub>C</sub> + I<sub>B</sub>**.
* **Współczynniki wzmocnienia:**
    * **α (alfa):** Współczynnik transportu prądu (wzmocnienie w układzie wspólnej bazy). Wynosi **α = I<sub>C</sub> / I<sub>E</sub>** i przyjmuje wartości bliskie jedności (np. 0,95 - 0,999).
    * **β (beta):** Współczynnik wzmocnienia prądowego (w układzie wspólnego emitera). Wynosi **β = I<sub>C</sub> / I<sub>B</sub>** i zazwyczaj przyjmuje wartości **≫ 1** (np. 100-200).
    * **Zależność między współczynnikami:** **β = α / (1 - α)**.

**Trzy układy włączania tranzystora:**
* **WE (Wspólny Emiter):** Najpopularniejszy, odwraca fazę, zapewnia duże wzmocnienie prądowe i napięciowe.
* **WB (Wspólna Baza):** Brak wzmocnienia prądowego (**α < 1**).
* **WC (Wspólny Kolektor):** Wtórnik emiterowy, brak wzmocnienia napięciowego.

**Układ Darlingtona:** Połączenie dwóch tranzystorów (**E<sub>1</sub> → B<sub>2</sub>**) w celu uzyskania gigantycznego wzmocnienia prądowego: **A<sub>I</sub> ≈ β<sup>2</sup>**.

---

## 3. Tryby Pracy Tranzystora

Punkt pracy tranzystora zależy od sposobu polaryzacji obu złącz:

* **Zakres Aktywny (normalny):** Złącze E-B spolaryzowane w kierunku przewodzenia, złącze C-B zaporowo. W tym trybie tranzystor pracuje jako **wzmacniacz** sygnałów.
* **Zakres Nasycenia:** Oba złącza (E-B oraz C-B) spolaryzowane w kierunku przewodzenia. Używany w technice cyfrowej jako stan włączenia przełącznika (ON). Napięcie **U<sub>CE</sub>** spada niemal do zera.
* **Zakres Zatkania (Odcięcia):** Oba złącza spolaryzowane zaporowo. Tranzystor nie przewodzi prądu (poza bardzo małymi prądami upływu). Stan wyłączenia przełącznika (OFF).
* **Zakres Inwersyjny:** Złącze E-B zaporowo, C-B przewodzenia (zamiana ról emitera i kolektora, lecz z bardzo małym wzmocnieniem ze względu na asymetrię budowy).

---

## 4. Charakterystyki i Punkt Pracy (Q-point)

Kluczowe wykresy dla najpopularniejszego układu **WE**:

* **Charakterystyka wejściowa (U<sub>BE</sub> = f(I<sub>B</sub>)** dla stałego **U<sub>CE</sub>):** Przypomina zwykłą charakterystykę przewodzenia diody krzemowej, gdzie prąd rośnie gwałtownie po przekroczeniu około **0,6 - 0,7 V**.
* **Charakterystyka wyjściowa (I<sub>C</sub> = f(U<sub>CE</sub>)** dla parametrycznego **I<sub>B</sub>):** Pokazuje płaskie linie prądu kolektora w obszarze aktywnym.
* **Prosta pracy (Load line):** Wyznaczona przez napięcie zasilania **U<sub>CC</sub>** i rezystancję obciążenia **R<sub>L</sub>** (**U<sub>CE</sub> = U<sub>CC</sub> - R<sub>L</sub> * I<sub>C</sub>**). Przedstawia wszystkie możliwe stany obwodu.
* **Punkt pracy (Q-point):** Punkt przecięcia charakterystyki wyjściowej z prostą pracy. Reprezentuje stałoprądowe wartości polaryzacji (**I<sub>C0</sub>**, **U<sub>CE0</sub>**) przy braku sygnału zmiennego.

> **Ograniczenia pracy bezpiecznej:** W trakcie projektowania nie można przekroczyć: maksymalnego prądu (**I<sub>Cmax</sub>**), maksymalnego napięcia (**U<sub>CEmax</sub>**) oraz **hiperboli maksymalnej mocy admisyjnej (P<sub>a</sub>)**.

---

## 5. Model Małosygnałowy (Parametry macierzy "h")

Aby analizować wzmacnianie małych sygnałów zmiennych (AC), prąd stały pomija się (źródła zasilania DC traktuje się jako zwarcia do masy), a tranzystor zastępuje się liniowym czwórnikiem hybrydowym.

* **h<sub>11e</sub> = r<sub>we</sub>:** Rezystancja wejściowa układu (**≈ ΔU<sub>BE</sub> / ΔI<sub>B</sub>**).
* **h<sub>21e</sub> = β:** Małosygnałowe wzmocnienie prądowe (**≈ ΔI<sub>C</sub> / ΔI<sub>B</sub>**).
* **h<sub>22e</sub> = 1 / r<sub>wy</sub>:** Konduktancja wyjściowa (**≈ ΔI<sub>C</sub> / ΔU<sub>CE</sub>**).
* **Wzmocnienie napięciowe (K<sub>u</sub>)** wzmacniacza w układzie WE określa wzór przybliżony: **K<sub>u</sub> ≈ β * (R<sub>L</sub> / h<sub>11e</sub>)**.

---

## 6. Decybele, Pasmo Przenoszenia i Klasy Wzmacniaczy

**Decybele (dB):**
* Dla wzmocnienia napięciowego i prądowego: **K<sub>u,i</sub>[dB] = 20 * log(K<sub>u,i</sub>)**.
* Dla wzmocnienia mocy: **K<sub>p</sub>[dB] = 10 * log(K<sub>p</sub>)**.

**Pasmo przenoszenia (Δf<sub>3dB</sub>):** Zakres od dolnej (**f<sub>d</sub>**) do górnej (**f<sub>g</sub>**) częstotliwości granicznej. Na krańcach pasma następuje spadek wzmocnienia o **3 dB**, co fizycznie oznacza spadek napięcia do poziomu **1 / √2 ≈ 0,707** wartości maksymalnej.

**Klasy pracy wzmacniaczy:**
* **Klasa A:** Tranzystor przewodzi prąd przez pełny okres (360°). Bardzo małe zniekształcenia, ale bardzo niska sprawność (max 25%).
* **Klasa B:** Przewodzenie tylko przez połowę okresu (180°). Sprawność wysoka (ok. 78,5%).
* **Klasa AB:** Kompromis. Przewodzenie od 180° do 360°. Sprawność rzędu 50-70% przy zachowaniu niskich zniekształceń.
* **Klasa C:** Przewodzenie < 180° (używana m.in. w nadajnikach radiowych).

---

## 7. Wzmacniacze Operacyjne (Op-Amp)

To fundamentalne, wielotranzystorowe analogowe układy scalone oparte na wejściowym stopniu wzmacniacza różnicowego.

**Cechy Idealnego Wzmacniacza Operacyjnego:**
* Różnicowe wzmocnienie napięciowe (**A<sub>vd</sub>**) dążące do nieskończoności (**A<sub>vd</sub> → ∞**).
* Rezystancja wejściowa dążąca do nieskończoności (**R<sub>in</sub> → ∞**).
* Rezystancja wyjściowa dążąca do zera (**R<sub>out</sub> → 0**).

> **Ważne:** W praktyce wzmacniacze operacyjne **zawsze pracują z pętlą ujemnego sprzężenia zwrotnego** (rezystor podłączony z wyjścia na wejście odwracające "-"), co stabilizuje układ i pozwala precyzyjnie dobrać wzmocnienie samymi zewnętrznymi rezystorami.

**Podstawowe konfiguracje:**
* **Wzmacniacz odwracający:** Zmienia fazę o 180°. Wzór na napięcie wyjściowe: **v<sub>out</sub> = -(R<sub>F</sub> / R<sub>S</sub>) * v<sub>s</sub>**.
* **Wzmacniacz nieodwracający:** Zachowuje zgodność fazy. Wzór: **v<sub>out</sub> = (1 + R<sub>F</sub> / R<sub>S</sub>) * v<sub>s</sub>**.
* **Wzmacniacz sumujący:** **v<sub>out</sub> = -( (R<sub>F</sub> / R<sub>S1</sub>) * v<sub>s1</sub> + (R<sub>F</sub> / R<sub>S2</sub>) * v<sub>s2</sub> + ... )**.
* **Wzmacniacz całkujący:** Zamiast rezystora sprzężenia posiada kondensator (**C<sub>F</sub>**). Całkuje sygnał wejściowy po czasie: **v<sub>out</sub>(t) = -(1 / (R<sub>S</sub> * C<sub>F</sub>)) * ∫ v<sub>s</sub>(t) dt**.

## 1. Wprowadzenie i Podział

* **Efekt polowy:** Zjawisko zmiany konduktywności (przewodnictwa) materiału półprzewodnikowego pod wpływem zewnętrznego **pola elektrycznego**.
* **Oznaczenia wyprowadzeń:**
    * **S (Source - Źródło):** odpowiednik emitera.
    * **G (Gate - Bramka):** odpowiednik bazy.
    * **D (Drain - Dren):** odpowiednik kolektora.

> **Ważne:** Rezystancja wejściowa tranzystorów polowych jest gigantyczna (**R<sub>we</sub> ≫ R<sub>wy</sub>**), co oznacza, że w odróżnieniu od tranzystorów bipolarnych (sterowanych prądem), **tranzystory polowe sterowane są napięciem** (praktycznie nie pobierają prądu bramki).

**Główny podział tranzystorów FET:**
* **JFET (Złączowe):** Ze złączem p-n.
* **MOSFET / IGFET (Z izolowaną bramką):** Bramka oddzielona od kanału warstwą izolatora (najczęściej tlenku krzemu **SiO<sub>2</sub>**). Dzielą się na:
    * **Z kanałem wzbogacanym (E-MOSFET):** Normalnie wyłączone.
    * **Z kanałem zubożanym (D-MOSFET):** Normalnie włączone (posiadają wbudowany kanał).

---

## 2. Tranzystory złączowe (JFET)

* **Budowa i Zasada działania (kanał n):** Prąd płynie przez kanał typu "n" od źródła (S) do drenu (D). Dwie warstwy p+ wokół kanału tworzą bramkę (G).
* **Polaryzacja:** Złącze bramka-kanał (G-S) polaryzuje się w **kierunku zaporowym** (dla kanału "n" napięcie **U<sub>GS</sub> ≤ 0**). Wzrost ujemnego napięcia **U<sub>GS</sub>** powoduje poszerzanie się warstwy zaporowej, która "zubaża" (zwęża) kanał przewodzący, ograniczając prąd drenu **I<sub>D</sub>**, aż do momentu całkowitego zatkania kanału.

**Kluczowe parametry statyczne i wzory:**
* **U<sub>p</sub> (Napięcie odcięcia kanału):** Ujemne napięcie **U<sub>GS</sub>**, przy którym prąd przestaje płynąć.
* **I<sub>DSS</sub> (Prąd nasycenia):** Maksymalny prąd drenu płynący przy **U<sub>GS</sub> = 0V**.
* **Równanie prądu (w zakresie nasycenia):** **I<sub>D</sub> = I<sub>DSS</sub> * (1 - U<sub>GS</sub> / U<sub>p</sub>)<sup>2</sup>**

**Charakterystyka wyjściowa (zakresy pracy):**
* **Zakres liniowy (omowy/nienasycenia):** Dla małych **U<sub>DS</sub>**, tranzystor zachowuje się jak rezystor sterowany napięciem.
* **Zakres nasycenia:** Po przekroczeniu **U<sub>Dsat</sub>**, prąd **I<sub>D</sub>** staje się prawie stały i zależy wyłącznie od **U<sub>GS</sub>**.
* **Przebicie:** Gwałtowny wzrost prądu przy zbyt wysokim **U<sub>DS</sub>**.

---

## 3. Tranzystory z izolowaną bramką (MOSFET)

Charakteryzują się bramką odizolowaną galwanicznie cienką warstwą tlenku (**SiO<sub>2</sub>**), co daje ogromną rezystancję wejściową.

### A. MOSFET z kanałem wzbogacanym (E-MOSFET - Enhanced)
* **Normalnie wyłączony (OFF):** Bez przyłożenia napięcia, kanał nie istnieje (izolacja między S i D w postaci dwóch złącz p-n przeciwstawnie skierowanych).
* **Zasada działania (kanał n):** Dodatnie napięcie na bramce odpycha dziury z podłoża (typu p) i przyciąga elektrony pod warstwę izolatora, tworząc **obszar inwersyjny**, który staje się kanałem przewodzącym "n".
* **Napięcie progowe (U<sub>T</sub>):** Minimalne napięcie **U<sub>GS</sub>**, które trzeba przekroczyć, aby wyindukować kanał i wymusić przepływ prądu.
* **Wzory na prąd:**
    * Zakres nienasycenia: **I<sub>D</sub> = β * [ (U<sub>GS</sub> - U<sub>T</sub>) * U<sub>DS</sub> - U<sub>DS</sub><sup>2</sup> / 2 ]**
    * Zakres nasycenia: **I<sub>D</sub> = (β / 2) * (U<sub>GS</sub> - U<sub>T</sub>)<sup>2</sup>**

### B. MOSFET z kanałem zubożanym (D-MOSFET - Depleted)
* **Normalnie załączony (ON):** Posiada technologicznie wbudowany, stały kanał. Przy **U<sub>GS</sub> = 0V** prąd może płynąć.
* **Można nim sterować w obu kierunkach:**
    * Ujemne **U<sub>GS</sub>**: Odpycha elektrony, zubaża kanał i zmniejsza prąd (tryb zubożania).
    * Dodatnie **U<sub>GS</sub>**: Przyciąga dodatkowe elektrony, wzbogacając kanał i zwiększając prąd (tryb wzbogacania).

---

## 4. Model małosygnałowy (AC) tranzystorów FET

Dla małych sygnałów zmiennych, modele JFET i MOSFET są identyczne. Z uwagi na brak prądu bramki, model AC opiera się na **sterowanym napięciem źródle prądowym**.

* **Transkonduktancja (g<sub>m</sub>):** Najważniejszy parametr zmiennoprądowy tranzystora polowego. Określa, jak mocno napięcie sterujące na bramce wpływa na zmianę prądu wyjściowego.
  **g<sub>m</sub> = ΔI<sub>D</sub> / ΔU<sub>GS</sub>**
* **Konduktancja wyjściowa (g<sub>ds</sub>):** **g<sub>ds</sub> = ΔI<sub>D</sub> / ΔU<sub>DS</sub>**
* **Wzmocnienie napięciowe (A<sub>V</sub>):** Dla podstawowego układu wzmacniacza wynosi: **A<sub>V</sub> = -g<sub>m</sub> * R<sub>D</sub>** (Znak minus oznacza odwrócenie fazy sygnału, a **R<sub>D</sub>** to rezystancja w obwodzie drenu).
* **Pojemności pasożytnicze:** (**C<sub>gd</sub>**, **C<sub>gs</sub>**) mają kluczowe znaczenie przy wysokich częstotliwościach – ograniczają szybkość przełączania i pasmo przenoszenia.

---

## 5. Zastosowania tranzystorów polowych

Dzięki sterowaniu napięciowemu i wysokiej impedancji wejściowej, FET-y mają szerokie zastosowanie:

* **Rezystor sterowany napięciem (VCR):** Tranzystor (głównie JFET) pracujący w zakresie omowym. Wartość rezystancji (**R<sub>JFET</sub> = U<sub>DS</sub> / I<sub>D</sub>**) zależy liniowo od napięcia na bramce.
* **Klucz (Przełącznik):** Najczęstsze zastosowanie (szczególnie MOSFET-ów w elektronice cyfrowej).
    * Stan **OPEN (WYŁ)**: Brak kanału, nieskończenie wysoka rezystancja.
    * Stan **CLOSE (ZAŁ)**: Kanał otwarty, tranzystor stanowi bardzo małą rezystancję **R<sub>DS(ON)</sub>**.
* **Mostek H (Sterowanie silnikami):** Wykorzystanie komplementarnych tranzystorów (CMOS) p-kanałowych i n-kanałowych do płynnego sterowania kierunkiem obrotów i zatrzymaniem silnika (Motor Stopped, Rotates Forward, Rotates Reverse).
* **Wzmacniacze audio i stopnie wejściowe sprzętu pomiarowego:** Wszędzie tam, gdzie układ pomiarowy (lub mikrofon) nie może być obciążony prądowo, wysoka impedancja FET jest niezastąpiona.
* **Drajvery zasilania (LED, ściemniacze):** Gdzie wymagana jest kontrola dużych prądów przy pomocy bardzo słabych (np. z mikroprocesora) sygnałów napięciowych.

## 1. Przełączanie w obwodach DC i Modulacja PWM

* W obwodach prądu stałego (DC) elementami przełączającymi są najczęściej tranzystory unipolarne (MOSFET) lub bipolarne.
* **PWM (Pulse Width Modulation - Modulacja szerokości impulsu):** To technika sterowania, w której **wypełnienie impulsu** decyduje o wartości skutecznej napięcia, a tym samym o średniej mocy przekazywanej do obciążenia.
    * **Wzór na moc średnią:** **P<sub>sr</sub> = R * I<sub>sk</sub><sup>2</sup>**
    * **Wzór na prąd skuteczny (RMS):** **I<sub>sk</sub> = √( (1/T) * ∫ i<sup>2</sup> dt )** (całkowane w przedziale od 0 do T).
* **Zabezpieczenie:** W układach z obciążeniem indukcyjnym stosuje się diodę zabezpieczającą (ang. *Flywheel Diode*), która chroni tranzystor przed przepięciami.

---

## 2. Wymagania dla kluczy półprzewodnikowych i Mostek H

Idealny przełącznik półprzewodnikowy powinien spełniać dwa główne warunki:
1. **Krótkie czasy przełączania** (rzędu mikrosekund).
2. **Bardzo mały spadek napięcia w stanie załączenia** (**U<sub>CEon</sub>** dla BJT, **U<sub>DSon</sub>** dla MOSFET). Gwarantuje to **małą moc traconą** (wydzielaną jako ciepło) w samym tranzystorze, co wynika ze wzoru **P = I<sub>Don</sub> * U<sub>DSon</sub>**.

* **Układ CMOSFET (Mostek H):** Zbudowany z komplementarnych tranzystorów MOSFET (z kanałem N oraz P). Służy m.in. do sterowania silnikami. Polaryzacja odpowiednich bramek definiuje **kierunek obrotów**, a wypełnienie sygnału sterującego (PWM) odpowiada za **szybkość obrotową**.

---

## 3. Regulacja mocy AC (Sterowanie fazowe)

* Tradycyjne układy prostownicze z diodami (np. mostek Graetza) pozwalają jedynie na zmianę sygnału zmiennego na stały, jednak **nie umożliwiają regulacji mocy** dostarczanej do obciążenia.
* Rozwiązaniem jest **sterowanie fazowe**. Polega ono na "wycinaniu" odpowiedniej części sygnału sinusoidalnego. Zmieniając kąt fazowy (**θ**) załączenia, płynnie regulujemy przekazywaną moc.

---

## 4. Diak (DIAC - Diode for Alternating Current)

To dwukierunkowy półprzewodnikowy element przełączający. Najprostsza budowa przypomina tranzystor PNP pozbawiony wyprowadzenia bazy (często występuje w strukturze trój- lub czterozłączowej).

* Posiada całkowicie **symetryczną charakterystykę I-U**.
* **Zasada działania:** Diak zaczyna przewodzić prąd dopiero wtedy, gdy napięcie na jego zaciskach przekroczy tzw. **napięcie przebicia**.
* Po przekroczeniu tego napięcia element wchodzi w obszar **ujemnej rezystancji**, co oznacza, że prąd rośnie przy jednoczesnym spadku napięcia na elemencie.

---

## 5. Tyrystor (SCR - Silicon Controlled Rectifier)

To kierunkowa "sterowana dioda" o czterowarstwowej strukturze **PNPN**. Występują tu trzy wyprowadzenia: Anoda (A), Katoda (K) i Bramka (G).

* **Model dwutranzystorowy:** Tyrystor zachowuje się jak połączenie tranzystora PNP i NPN. Wysterowanie jednego powoduje otwarcie drugiego, tworząc pętlę silnego dodatniego sprzężenia zwrotnego.
* **Załączanie:** Aby włączyć tyrystor, stosuje się krótki impuls prądu podany na bramkę (**I<sub>G</sub> ≈ 1 - 10 mA**). Inne, mniej popularne sposoby to bardzo szybki narost napięcia między anodą a katodą (**V<sub>AK</sub>**) lub oświetlenie struktury (fototyrystory).
* **Kluczowa zasada działania (Prąd trzymania):** Dzięki wewnętrznemu sprzężeniu, nawet po zaniku impulsu sterującego z bramki, **tyrystor pozostaje w stanie przewodzenia**. Wyłączy się samoistnie dopiero wtedy, gdy prąd główny spadnie poniżej wartości krytycznej – tzw. **prądu trzymania (holding current)**.

> **Ważne:** W obwodach DC tyrystor trzeba wyłączać specjalnym rozłącznikiem. W układach AC wyłącza się on sam naturalnie w momencie przejścia napięcia przez zero. Ponieważ przewodzi tylko w jedną stronę, pojedynczy element zapewnia sterowanie mocą maksymalnie do 50% (jedna połówka). Do pełnego sterowania stosuje się mostki lub układy równoległe przeciwsobne.

---

## 6. Triak (TRIAC)

To element będący odpowiednikiem **dwóch tyrystorów połączonych równolegle i przeciwsobnie**.

* Posiada zdolność **przewodzenia prądu w obu kierunkach**, co czyni go idealnym rozwiązaniem dla prądu przemiennego.
* W przeciwieństwie do tyrystora, triak może być załączany impulsem prądowym bramki zarówno **dodatnim, jak i ujemnym**, bez względu na polaryzację napięcia sieciowego. Pozwala to na pracę w czterech trybach (kwadranty: I+, I-, III+, III-).
* W praktyce układ składający się z Triaka, Diaka, rezystorów i kondensatora stanowi podstawę każdego klasycznego ściemniacza światła lub regulatora obrotów.

---

## 7. Tranzystor IGBT (Insulated Gate Bipolar Transistor)

Zaawansowany element stanowiący hybrydę: od strony wejścia jest to **tranzystor polowy MOSFET** (izolowana bramka), natomiast od strony wyjścia **tranzystor bipolarny PNP** (kolektor, emiter).

**Łączy w sobie najlepsze cechy obu rodzin:**
* Posiada **bardzo dużą rezystancję wejściową**, co sprawia, że jest bardzo łatwy w sterowaniu napięciowym (nie pobiera znaczącego prądu bramki).
* Charakteryzuje się **małym spadkiem napięcia w stanie przewodzenia** (mała rezystancja C-E) co ogranicza straty ciepła.
* Jest w stanie blokować i przełączać **bardzo wysokie napięcia (kV)** oraz przewodzić gigantyczne prądy (100A i więcej).
* Gwarantuje znacznie **krótsze czasy przełączania** (większą szybkość) niż klasyczne tranzystory bipolarne.

## 1. Emitery światła – Dioda elektroluminescencyjna (LED)

* **Zasada działania:** Podstawą diody LED jest **złącze p-n spolaryzowane w kierunku przewodzenia**. Przepływ prądu powoduje wstrzykiwanie nośników mniejszościowych, co prowadzi do **rekombinacji par elektron-dziura**.
* **Emisja fotonu:** Energia wyzwolona podczas tej rekombinacji jest uwalniana w postaci kwantu światła (fotonu).
* **Warunek emisji światła:** Dioda musi być wykonana z półprzewodnika o **prostej przerwie energetycznej** (w przeciwieństwie np. do krzemu, który ma skośną przerwę i przy rekombinacji wydziela głównie ciepło).
* **Materiały i długość fali:** Stosuje się najczęściej związki z grup **A<sup>III</sup>B<sup>V</sup>** (np. arsenek galu - GaAs, fosforek galu - GaP). Długość emitowanej fali (kolor światła) zależy bezpośrednio od szerokości przerwy energetycznej (**W<sub>g</sub>**) zastosowanego materiału.
* **Budowa fizyczna:** Struktura posiada anodę (+) i katodę (-), obszar czynny (gdzie zachodzi rekombinacja) oraz często tylne zwierciadło odbijające światło w pożądanym kierunku. Całość zalana jest w żywicy, która pełni rolę soczewki.

---

## 2. Światłowody – Podział i Materiały

Światłowody to falowody dielektryczne, w których propagacja światła odbywa się dzięki zjawisku całkowitego wewnętrznego odbicia na granicy rdzenia i płaszcza.

**Materiały światłowodowe:**
* **Szkło kwarcowe (SiO<sub>2</sub>)** – domieszkowane (najpopularniejsze w telekomunikacji).
* **ZBLAN** – specjalne szkła fluorkowe (zawierające cyrkon, bar, lantan, glin, sód).
* **Tworzywa sztuczne (PMMA)** – światłowody plastikowe (POF), stosowane na krótkich dystansach (np. sprzęt audio, motoryzacja).
* **Materiały krystaliczne** (np. szafir).

**Podział ze względu na strukturę (profil współczynnika załamania):**
* **O skokowej zmianie współczynnika załamania** (rdzeń ma stały współczynnik, na granicy z płaszczem następuje nagły skok).
* **O płynnej (gradientowej) zmianie współczynnika załamania** (współczynnik maleje płynnie od środka rdzenia ku jego krawędziom, co zmniejsza dyspersję).

**Podział ze względu na liczbę prowadzonych modów (promieni):**
* **Wielomodowe** (rdzeń o większej średnicy, światło rozchodzi się wieloma torami).
* **Jednomodowe** (bardzo cienki rdzeń, światło wędruje tylko jednym, osiowym torem – brak dyspersji modalnej, idealne na dalekie dystanse).

---

## 3. Tłumienie i Okna Transmisyjne (Światłowód kwarcowy)

Tłumienie (**α**) wyraża się w **dB/km**. Na jego wartość wpływają dwa główne zjawiska fizyczne, z których wypadkowo powstaje charakterystyka tłumienności:
1. **Rozpraszanie Rayleigha** (silnie maleje wraz ze wzrostem długości fali).
2. **Absorpcja** w podczerwieni oraz piki absorpcyjne pochodzące od zanieczyszczeń (głównie grup wodorotlenowych **OH<sup>-</sup>**).

Na podstawie wykresu tłumienia w funkcji długości fali (**λ**) wyznaczono historycznie **trzy optymalne okna transmisyjne** (obszary, w których tłumienie jest najmniejsze, co pozwala na transmisję sygnału na dalekie odległości):
* **I okno transmisyjne (~0,85 μm):** Pierwsze historycznie wykorzystywane pasmo. Lokalne minimum tłumienia, łatwe do uzyskania tanimi nadajnikami (np. pierwsze LED-y).
* **II okno transmisyjne (~1,3 μm):** Kolejne pasmo o jeszcze niższym tłumieniu (ok. 0,5 dB/km). Co bardzo ważne na egzamin – w tym oknie dla standardowych włókien występuje **punkt zerowej dyspersji chromatycznej**.
* **III okno transmisyjne (~1,55 μm):** Wykorzystywane we współczesnej telekomunikacji dalekosiężnej, ponieważ znajduje się tu **globalne (absolutne) minimum tłumienia** dla włókna kwarcowego (rzędu 0,2 dB/km).